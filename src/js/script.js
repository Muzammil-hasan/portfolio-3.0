/* ##################################### */
/* Menu Animation */
/* ##################################### */

const html = document.documentElement;
const overlay = document.querySelector(".overlay");
const menu = document.querySelector(".menu");
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

window.onresize = () => {
  gsap.to(".overlay", {
    scale: getVpdr(),
    ease: Expo.easeInOut,
    duration: 5,
  });
};

menuTl
  .to(
    ".overlay",
    {
      duration: 0.8,
      scale: getVpdr(),
      ease: Power2.easeInOut,
    },
    "menuBar"
  )
  .to(
    ".bar-1",
    {
      rotation: -45,
      ease: Power2.easeInOut,
      duration: 0.3,
      top: "1.2rem",
      y: 9,
      backgroundColor: "#fff",
    },
    "menuBar"
  )
  .to(
    ".bar-2",
    {
      width: 0,
      opacity: 0,
      transformOrigin: "center",
      ease: Power2.easeInOut,
      duration: 0.3,
    },
    "menuBar"
  )
  .to(
    ".bar-3",
    {
      rotation: 45,
      ease: Power2.easeInOut,
      duration: 0.2,
      top: "1.2rem",
      y: -0.6,
      backgroundColor: "#fff",
    },
    "menuBar"
  )
  .to(
    ".menu-bar",
    {
      top: "46%",
      duration: 0.2,
    },
    "menuBar"
  )
  .to(
    ".menu",
    {
      backgroundColor: "#000",
    },
    "menuBar"
  );

function overlayExpand() {
  menuTl.reversed(!menuTl.reversed());
}

menu.addEventListener("click", () => {
  overlayExpand();
  let cta = document.querySelector(".cta-wrapper a");
  let chars = document.querySelectorAll(".char");
  let logo = document.querySelector(".logo-wrapper a svg");
  for (const char of chars) {
    char.classList.toggle("is-black");
  }
  cta.classList.toggle("black");
  logo.classList.toggle("black-logo");
});
menu.addEventListener("mouseover", () => {
  gsap.to(".bar-2", {
    width: "1.7rem",
    ease: Expo.easeOut,
  });
});
menu.addEventListener("mouseleave", () => {
  gsap.to(".bar-2", {
    width: "70%",
    ease: Expo.easeOut,
  });
});

/* ##################################### */
/* Cursor Animation */
/* ##################################### */

// const cursor = document.querySelector(".cursor");

// document.addEventListener("mousemove", (e) => {
//   cursor.setAttribute(
//     "style",
//     "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
//   );
// });

// document.addEventListener("click", () => {
//   cursor.classList.add("expand");

//   setTimeout(() => {
//     cursor.classList.remove("expand");
//   }, 500);
// });

// gsap.from(".menu-bar", {
//   x: 100,
//   opacity: 0,
// });

/* ##################################### */
/* !Cursor Animation */
/* ##################################### */
