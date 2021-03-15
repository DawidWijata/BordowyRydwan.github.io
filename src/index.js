import "./js/lang.js";
import "./js/menu.js";
import "./js/caroussel.js";
import "./js/scroll.js";

const curves = document.querySelectorAll('.bg-curve');

const fn = () => {
  const DIMENSIONS_RATIO = 8.421;
  const controlUnitHeight = Math.floor(window.innerWidth / DIMENSIONS_RATIO);

  curves.forEach(curve => curve.style.height = `${controlUnitHeight}px`);
}

//window.addEventListener('resize', fn);
//window.addEventListener('DOMContentLoaded', fn);