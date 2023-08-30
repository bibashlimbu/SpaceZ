const navLinks = document.querySelectorAll(".navbar_link");

const removeActive = () => {
  navLinks.forEach((nav) => {
    nav.classList.remove("navlink_active");
  });
};

document.querySelector(".navbar-nav").addEventListener("click", (e) => {
  const navLink = e.target.closest(".nav-link");
  removeActive();
  navLink.classList.add("navlink_active");
});

const secs = document.querySelectorAll("section");
window.onscroll = () => {
  secs.forEach((sec) => {
    let top = window.scrollY;
    let offsetTop = sec.offsetTop -150;
    let offsetHeight = sec.offsetHeight;
    const id = sec.getAttribute("id");

    if (top >= offsetTop && top < offsetTop + offsetHeight) {
      removeActive();
      document.querySelector(`.navbar_link[href*='${id}']`)
      .classList.add("navlink_active");
    }
  });
};

const swiper = new Swiper(".sample-slider", {
  loop: true,
  slidesPerView: 6,
  centeredSlides: true,
  spaceBetween: 5, //added
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
