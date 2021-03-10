import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const elements = document.querySelectorAll('section > div');

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

