export async function initClavier(shadowRoot) {
  try {
    const res = await fetch('./clavier/clavier.css');
    const css = await res.text();
    const style = document.createElement('style');
    style.textContent = css;
    shadowRoot.appendChild(style);
    console.log('[initClavier] Style injecté avec succès.');
  } catch (err) {
    console.error('[initClavier] Erreur de chargement du CSS :', err);
  }

  // La logique dynamique ici
}
