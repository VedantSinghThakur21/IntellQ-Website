const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xoeqwyoj';

/* AOS: same duration/once/offset — disable mutation observer to cut scroll overhead */
if (typeof AOS !== 'undefined') {
  AOS.init({
    duration: 700,
    once: true,
    offset: 80,
    disableMutationObserver: true,
    throttleDelay: 99,
    debounceDelay: 50
  });
}

/* Stat counter — same 1.2s cubic ease-out; skip redundant text writes */
function animateStat(el) {
  const target = parseFloat(el.dataset.target);
  const decimals = parseInt(el.dataset.decimals || '0', 10);
  const duration = 1200;
  const start = performance.now();
  let last = '';
  function frame(now) {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    const value = target * eased;
    const next = decimals > 0 ? value.toFixed(decimals) : String(Math.round(value));
    if (next !== last) {
      el.textContent = next;
      last = next;
    }
    if (t < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

const statNodes = document.querySelectorAll('.stat-num');
if (statNodes.length) {
  const statObserver = new IntersectionObserver((entries) => {
    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i];
      if (!entry.isIntersecting) continue;
      const el = entry.target;
      if (el.dataset.counted) continue;
      el.dataset.counted = '1';
      animateStat(el);
      statObserver.unobserve(el);
    }
  }, { threshold: 0.4 });
  for (let i = 0; i < statNodes.length; i++) statObserver.observe(statNodes[i]);
}

/*
 * Pause continuous CSS animations when off-screen or tab hidden.
 * Same keyframes/duration — only animation-play-state toggles.
 */
(function pauseOffscreenAnimations() {
  const animated = document.querySelectorAll('.orb-float-a, .orb-float-b, .orb-float-c, .orb-float-d, .animate-marquee');
  if (!animated.length) return;

  const visible = new WeakSet();

  const io = new IntersectionObserver((entries) => {
    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i];
      if (entry.isIntersecting) {
        visible.add(entry.target);
        if (!document.hidden) entry.target.classList.remove('is-paused');
      } else {
        visible.delete(entry.target);
        entry.target.classList.add('is-paused');
      }
    }
  }, { rootMargin: '50px 0px', threshold: 0 });

  for (let i = 0; i < animated.length; i++) {
    animated[i].classList.add('is-paused');
    io.observe(animated[i]);
  }

  document.addEventListener('visibilitychange', () => {
    for (let i = 0; i < animated.length; i++) {
      const el = animated[i];
      if (document.hidden || !visible.has(el)) el.classList.add('is-paused');
      else el.classList.remove('is-paused');
    }
  }, { passive: true });
})();

/* Form validation helpers */
function clearErrors(form) {
  const errs = form.querySelectorAll('.field-error');
  for (let i = 0; i < errs.length; i++) errs[i].remove();
  const bad = form.querySelectorAll('.border-rose-400');
  for (let i = 0; i < bad.length; i++) bad[i].classList.remove('border-rose-400');
}

function showFieldError(input, msg) {
  input.classList.add('border-rose-400');
  const err = document.createElement('p');
  err.className = 'field-error text-rose-600 text-[11px] mt-1';
  err.textContent = msg;
  input.parentElement.appendChild(err);
}

function validateForm(form) {
  clearErrors(form);
  let valid = true;

  const name = form.querySelector('[name="full_name"]');
  if (name && !name.value.trim()) {
    showFieldError(name, 'Name is required.');
    valid = false;
  }

  const email = form.querySelector('[name="email"]');
  if (email) {
    const v = email.value.trim();
    if (!v) {
      showFieldError(email, 'Email is required.');
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) {
      showFieldError(email, 'Enter a valid email address.');
      valid = false;
    }
  }

  const company = form.querySelector('[name="company"]');
  if (company && !company.value.trim()) {
    showFieldError(company, 'Company is required.');
    valid = false;
  }

  const message = form.querySelector('[name="message"]');
  if (message && !message.value.trim()) {
    showFieldError(message, 'This field is required.');
    valid = false;
  }

  return valid;
}

async function submitDemoForm(form) {
  const honeypot = form.querySelector('[name="_gotcha"]');
  if (honeypot && honeypot.value) return;

  if (!validateForm(form)) return;

  const btn = form.querySelector('#submit-btn');
  const success = form.querySelector('#form-success-msg');
  const error = form.querySelector('#form-error-msg');
  if (btn && !btn.dataset.defaultHtml) {
    btn.dataset.defaultHtml = btn.innerHTML;
  }
  const defaultBtn = btn ? btn.dataset.defaultHtml : '';

  if (success) success.classList.add('hidden');
  if (error) error.classList.add('hidden');

  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '<span>Submitting\u2026</span><span class="material-symbols-outlined animate-spin text-[16px]">sync</span>';
  }

  try {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' }
    });
    if (!res.ok) throw new Error('submit failed');
    if (btn) btn.classList.add('hidden');
    if (success) success.classList.remove('hidden');
  } catch (e) {
    if (error) error.classList.remove('hidden');
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = defaultBtn;
    }
  }
}

/*
 * XSS note: form submissions go to Formspree and are never echoed back into
 * the DOM on this site. No reflected-XSS surface exists. If any future code
 * renders user input into the page, it must be escaped first.
 */
