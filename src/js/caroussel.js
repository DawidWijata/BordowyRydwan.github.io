import Glide from "@glidejs/glide";

const glide = new Glide(".carousel", {
  type: 'carousel',
  perView: 2,
  focusAt: 'center',
  gap: 25
});

const setCarouselSlidesPerView = () => {
  const DESKTOP_SWITCH_SIZE = 1080;

  if(window.innerWidth > DESKTOP_SWITCH_SIZE){
    glide.settings.perView = 2;
  }
  else{
    glide.settings.perView = 1;
  }
}

glide.on(['mount.before', 'resize'], function () {
  setCarouselSlidesPerView();
})

glide.mount();
