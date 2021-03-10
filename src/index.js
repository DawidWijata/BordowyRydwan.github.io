import "./js/lang.js";
import "./js/menu.js";
import "./js/caroussel.js";
import "./js/scroll.js";

const curves = document.querySelectorAll('.top-curve');

window.addEventListener('resize', () => {
  const controlUnitHeight = Math.floor(window.innerWidth / 8.42);

  curves.forEach(curve => curve.style.height = `${controlUnitHeight}px`);
});