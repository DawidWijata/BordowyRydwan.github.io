const PL_icon = require('../assets/flag_pl.svg');
const ENG_icon = require('../assets/flag_eng.svg');
const PL = require("../lang/pl.json");
const ENG = require("../lang/eng.json");

const langBtns = [...document.querySelectorAll(".lang-change-btn")];
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
  setLangIcon();
}

const setLangIcon = () => {
  const img = new Image();
  img.src = (activeLang === 'PL') ? PL_icon : ENG_icon;

  langBtns.forEach(btn => {
    btn.children[0].src = img.src;
  })
}

const setCaptionsInLang = () => {
  const langObj = activeLang === 'PL' ? PL : ENG;

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

langBtns.forEach(btn => btn.addEventListener("click", handleLangButton));
window.addEventListener('DOMContentLoaded', setLangFromLocalStorage);