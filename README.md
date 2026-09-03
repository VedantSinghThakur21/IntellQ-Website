# IntellQ

IntellQ — Agentic AI Operating System, marketing site

## Folder structure

```
/
├── index.html                 # Main landing page
├── reconq.html                # ReconQ product page
├── assets/
│   ├── css/
│   │   └── styles.css         # Shared custom styles
│   ├── js/
│   │   └── main.js            # AOS init, stat counters, contact form
│   └── images/                # Reserved for future assets
├── components/                # Reserved for future partials / build step
├── DESIGN.md
└── README.md
```

## Preview locally

This is a static site (no build step). From the project root:

```bash
npx serve .
```

Or open the folder with the **VS Code / Cursor Live Server** extension and serve `index.html`.

Then visit:

- Landing: http://localhost:3000/ (port may vary)
- ReconQ: http://localhost:3000/reconq.html

## Contact form

Forms POST to Formspree. Set your form ID in `assets/js/main.js`:

```js
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xoeqwyoj';
```
