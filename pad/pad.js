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

  // Logique dynamique
  // Sélection des pads
  const padButtons = shadowRoot.querySelectorAll('.pad');

  // Construction du chemin audio
  function getPadSound(filename) {
    const base = new URL('.', import.meta.url);
    return new URL(`sound/${filename}`, base).href;
  }

  // Dictionnaire des sons par index
  const padSounds = {
    0: new Audio(getPadSound('808.wav')),
    1: new Audio(getPadSound('bass.wav')),
    2: new Audio(getPadSound('clap.wav')),
    3: new Audio(getPadSound('hatClose.wav')),
    4: new Audio(getPadSound('kick.wav')),
    5: new Audio(getPadSound('perc.wav')),
    6: new Audio(getPadSound('snare.wav')),
    7: new Audio(getPadSound('stomp.wav'))
  };

  // Événements sur chaque pad
  padButtons.forEach(pad => {
    pad.addEventListener('click', () => {
      const index = pad.dataset.padIndex;
      const sound = padSounds[index];
      if (sound) {
        sound.currentTime = 0;
        sound.play();
        console.log(`[Pad] Pad ${index} joué.`);
      }
    });
  });
}


