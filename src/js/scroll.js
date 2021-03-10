import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const elements = document.querySelectorAll('section > div');
const topBar = document.querySelector('#top-bar');
let lastScrollPosition = 0;

const isScrollDown = () => {
  const recentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (recentScrollPosition > lastScrollPosition && window.innerWidth > 768){
    topBar.classList.add('top-bar--hidden');
  } 
  else {
    topBar.classList.remove('top-bar--hidden');
  }

 lastScrollPosition = recentScrollPosition <= 0 ? 0 : recentScrollPosition;
}

elements.forEach(element => {
  gsap.fromTo(
    element.children,
    {
      x: -20,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 0.75,
      stagger: 0.4,
      ease: "easeInOut",
      scrollTrigger: {
        trigger: `#${element.parentNode.id}`,
        start: "40% bottom",
      },
    }
  );
})

window.addEventListener('scroll', isScrollDown);




