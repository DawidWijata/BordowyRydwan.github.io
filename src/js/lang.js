const PL_icon = require('../assets/flag_pl.svg');
const ENG_icon = require('../assets/flag_eng.svg');
const PL = require("../lang/pl.json");
const ENG = require("../lang/eng.json");

const langBtn = document.querySelector(".lang-change-btn");
let activeLang = 'ENG';

const setLang = () => {
  activeLang = (activeLang === 'ENG') ? 'PL' : 'ENG';
  localStorage.setItem('lang', JSON.stringify(activeLang));
};

const setLangFromLocalStorage = () => {
  if (localStorage.getItem('lang') !== null) {
    activeLang = JSON.parse(localStorage.getItem('lang'));
  } 
  else {
    localStorage.setItem('lang', JSON.stringify('ENG'));
  }

  setCaptionsInLang();
}

const setLangIcon = () => {
  const img = new Image();

  langBtn.innerHTML = '';
  img.src = (activeLang === 'PL') ? PL_icon : ENG_icon;

  langBtn.appendChild(img);
}

const setCaptionsInLang = () => {
  const langObj = eval(activeLang);

  Object.entries(langObj).forEach(obj => {
    const [id, elements] = obj;

    Object.entries(elements).forEach(selector => {
      const selectedNode = document.querySelector(`#${id} ${selector[0]}`);
      selectedNode.innerHTML = selector[1];
    })
  })
}

const handleLangButton = () => {
  setLang();
  setLangIcon();
  setCaptionsInLang();
}

langBtn.addEventListener("click", handleLangButton);
window.addEventListener('DOMContentLoaded', setLangFromLocalStorage);