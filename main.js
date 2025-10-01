import { initPad } from './pad/pad.js';
import { initClavier } from './clavier/clavier.js';
// PAD
class padComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  async connectedCallback() {
    try {
      const res = await fetch('pad/pad.html');
      const html = await res.text();

      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const template = doc.querySelector('#pad-template');

      if (template) {
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        initPad(this.shadowRoot);
        console.log('[pad-component] Composant initialisé avec succès.');
      } else {
        console.warn('[pad-component] Aucun template avec l’ID "pad-template" trouvé.');
      }
    } catch (err) {
      console.error('[pad-component] Erreur de chargement du template :', err);
    }
  }
}
customElements.define("pad-component", padComponent);

// CLAVIER
class clavierComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  async connectedCallback() {
    try {
      const res = await fetch('clavier/clavier.html');
      const html = await res.text();

      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const template = doc.querySelector('#clavier-template');

      if (template) {
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        initClavier(this.shadowRoot);
        console.log('[clavier-component] Composant initialisé avec succès.');
      } else {
        console.warn('[clavier-component] Aucun template avec l’ID "clavier-template" trouvé.');
      }
    } catch (err) {
      console.error('[clavier-component] Erreur de chargement du template :', err);
    }
  }
}
customElements.define('clavier-component', clavierComponent);

