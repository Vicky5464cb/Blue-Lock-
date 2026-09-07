// The ONLY JavaScript this page needs: CSS has no way to read the
// cursor's position, so this just writes it into --x / --y. Every
// animation, easing, and glow effect is handled entirely by style.css.

const hero = document.getElementById('hero');
const enterBtn = document.getElementById('enterBtn');

function setPoint(x, y) {
  hero.style.setProperty('--x', x + 'px');
  hero.style.setProperty('--y', y + 'px');
  hero.classList.add('moved');
}

hero.addEventListener('pointermove', (e) => {
  const r = hero.getBoundingClientRect();
