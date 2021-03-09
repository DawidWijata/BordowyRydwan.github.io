import Glide from "@glidejs/glide";

const glide = new Glide(".carousel", {
  type: "carousel",
  autoplay: 3500,
  perView: 1,
});

glide.mount();
