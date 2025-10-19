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

const whiteKeys = shadowRoot.querySelectorAll('.white-key');
const blackKeys = shadowRoot.querySelectorAll('.black-key');
const allKeys = [...whiteKeys, ...blackKeys];


function getAudioPath(filename) {
  const base = new URL('.', import.meta.url);
  return new URL(`sound/${filename}`, base).href;
}
const keySounds = {
  'C': new Audio(getAudioPath('do.wav')),
  'C#': new Audio(getAudioPath('do-diese.wav')),
  'C2': new Audio(getAudioPath('do2.wav')),
  'C#2': new Audio(getAudioPath('do-diese2.wav')),
  'D': new Audio(getAudioPath('re.wav')),
  'D#': new Audio(getAudioPath('re-diese.wav')),
  'D2': new Audio(getAudioPath('re2.wav')),
  'D#2': new Audio(getAudioPath('re-diese2.wav')),
  'E': new Audio(getAudioPath('mi.wav')),
  'E2': new Audio(getAudioPath('mi2.wav')),
  'F': new Audio(getAudioPath('fa.wav')),
  'F#': new Audio(getAudioPath('fa-diese.wav')),
  'G': new Audio(getAudioPath('sol.wav')),
  'G#': new Audio(getAudioPath('sol-diese.wav')),
  'A': new Audio(getAudioPath('la.wav')),
  'A#': new Audio(getAudioPath('la-diese.wav')),
  'B': new Audio(getAudioPath('si.wav'))
};

// Événements sur chaque touche
allKeys.forEach(key => {
  key.addEventListener('click', () => {
    const note = key.dataset.key;
    const sound = keySounds[note];
    if (sound) {
      sound.currentTime = 0;
      sound.play();
      console.log(`[Clavier] Touche ${note} jouée.`);
    }
  });
});

}
