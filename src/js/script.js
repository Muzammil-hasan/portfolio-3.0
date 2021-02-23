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

menuTl
  .to(".overlay", {
    duration: 1.5,
    scale: getVpdr(),

    ease: Power3.easeInOut,
  })
  .to(
    ".logo-path",
    {
      color: "#171717",
    },
    "-=1"
  )
  .to(
    ".main-nav",
    {
      display: "block",
    },
    "-=1"
  )
  .to(
    ".social-links",
    {
      display: "block",
    },
    "-=.8"
  )
  .to(
    ".menu-indicator",
    {
      display: "block",
    },
    "-=.8"
  )
  .from(
    ".main-nav ul li",
    {
      x: -100,
      opacity: 0,
      stagger: 0.1,
      ease: Power2.easeOut,
    },
    "-=1"
  )
  .from(
    ".social-links ul li",
    {
      yPercent: 100,
      opacity: 0,
      stagger: 0.1,
      ease: Power2.easeOut,
    },
    "-=1"
  );

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
  cursor.classList.toggle("bg-black");
});
hamburger.addEventListener("mouseover", () => {
  cursor.classList.add("expand");
});
hamburger.addEventListener("mouseleave", () => {
  cursor.classList.remove("expand");
});
/* Overlay size if Resized */

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
/* ##################################### */
/* Cursor Animation && Global */
/* ##################################### */
let scrollIndicator = document.querySelectorAll(".scroll .char");
const cursor = document.querySelector(".cursor");
const links = document.querySelectorAll("a");
for (const link of links) {
  link.addEventListener("mousemove", () => {
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

gsap.from(scrollIndicator, {
  xPercent: -60,
  duration: 1,
  delay: 2,
  opacity: 0,
  ease: "elastic.out(1, 0.5)",
  stagger: 0.03,
});
/* ##################################### */
/* Header Animations */
/* ##################################### */

gsap.from(".header", {
  yPercent: -250,
  duration: 2,
  delay: 1,
  stagger: 0.5,
  ease: Expo.easeOut,
  opacity: 0,
});

/* ##################################### */
/* Hero Section Animations */
/* ##################################### */

let heroAnim = new gsap.timeline();
let nameChars = document.querySelectorAll(".name .char");
let titleChars = document.querySelectorAll(".title .word");
let ellipse = document.querySelector(".ellipse");
let cta = document.querySelector(".cta");
heroAnim
  .from(".hero", {
    xPercent: -500,
    duration: 1.5,
    ease: Power1.out,
    opacity: 0,
    delay: 0.5,
  })
  .from(nameChars, {
    xPercent: -60,
    duration: 1,
    opacity: 0,
    ease: "elastic.out(1, 0.5)",
    stagger: 0.05,
  })
  .from(
    ".line span",
    {
      y: 400,
      duration: 1.5,
      ease: "power4.out",
      skewY: 10,
      stagger: 0.2,
    },
    "-=1.5"
  )
  .from(
    ".subtitle",
    {
      yPercent: 60,
      duration: 0.5,
      opacity: 0,
      ease: Power2.easeOut,
    },
    "-=1"
  )
  .from(
    ".ellipse",
    {
      xPercent: -50,
      opacity: 0,
      scale: 0,
      duration: 1,
      ease: Power2.easeIn,
      transformOrigin: "center",
    },
    "-=1.5"
  )
  .from(
    ".cta a",
    {
      xPercent: -50,
      opacity: 0,
      duration: 1,
      ease: Power2.easeIn,
      transformOrigin: "center",
    },
    "-=1.2"
  );

cta.addEventListener("mouseover", () => {
  gsap.to(ellipse, {
    width: "14.5rem",
    duration: 0.1,
    ease: Power2.easeIn,
  });
});
cta.addEventListener("mouseleave", () => {
  gsap.to(ellipse, {
    width: "4rem",
    duration: 0.1,
    ease: Power2.easeIn,
  });
});
