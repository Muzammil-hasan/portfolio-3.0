/* ##################################### */
/* Splitting Text */
/* ##################################### */

Splitting();

/* ##################################### */
/* Menu Animation */
/* ##################################### */

const html = document.documentElement;
const overlay = document.querySelector(".overlay");
let hamburger = document.querySelector(".hamburger");
const overlayWidth = overlay.clientWidth;
let menuTl = gsap.timeline();
menuTl.reversed(true);
let expanded = false;

/* Overlay size */

const getVpdr = () => {
  const vph = Math.pow(html.offsetHeight, 2); // Height
  const vpw = Math.pow(html.offsetWidth, 2); // Width
  const vpd = Math.sqrt(vph + vpw); // Diagonal
  return (vpd * 3.5) / overlayWidth; // Circle radius
};

/* Overlay size if Resized */

menuTl.to(".overlay", {
  duration: 1.5,
  scale: getVpdr(),
  ease: Power4.easeInOut,
});

function overlayExpand() {
  menuTl.reversed(!menuTl.reversed());
}

hamburger.addEventListener("click", () => {
  expanded = !expanded;
  hamburger.classList.toggle("is-active");
  overlayExpand();
  let cta = document.querySelector(".cta-wrapper a");
  let chars = document.querySelectorAll(".char");
  let logo = document.querySelector(".logo-wrapper a svg");
  for (const char of chars) {
    char.classList.toggle("is-black");
  }
  cta.classList.toggle("black");
  logo.classList.toggle("black-logo");
  // if (hamburger.classList.contains("is-active")) {
  //   window.onresize = () => {
  //     gsap.to(".overlay", {
  //       scale: getVpdr(),
  //       ease: Expo.easeInOut,
  //       duration: 1.5,
  //     });
  //   };
  // } else {
  // }
});

/* ##################################### */
/* Cursor Animation */
/* ##################################### */

const cursor = document.querySelector(".cursor");
const links = document.querySelectorAll("a");
for (const link of links) {
  link.addEventListener("mouseover", () => {
    cursor.classList.add("expand");
  });
  link.addEventListener("mouseleave", () => {
    cursor.classList.remove("expand");
  });
}

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
  );
});

/* ##################################### */
/* !Cursor Animation */
/* ##################################### */
