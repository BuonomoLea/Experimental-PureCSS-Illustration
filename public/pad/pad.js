export async function initPad(shadowRoot) {
  try {
    const res = await fetch('./pad/pad.css');
    const css = await res.text();

    const style = document.createElement('style');
    style.textContent = css;
    shadowRoot.appendChild(style);

    console.log('[initPad] Style injecté avec succès.');
  } catch (err) {
    console.error('[initPad] Erreur lors du chargement du CSS :', err);
  }

  // Logique dynamique ici (événements, interactions, etc.)
}


