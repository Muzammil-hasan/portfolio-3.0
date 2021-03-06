/* ##################################### */
/*           Splitting Text              */
/* ##################################### */

Splitting();

/* ##################################### */
/*           Menu Animation              */
/* ##################################### */

const html = document.documentElement;

const overlay = document.querySelector(".overlay");

let hamburger = document.querySelector(".hamburger");

let cta = document.querySelector(".cta-wrapper a");

let chars = document.querySelectorAll(".cta-wrapper .char");

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
		".logo-wrapper a svg",
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
	overlayExpand();

	expanded = !expanded;

	hamburger.classList.toggle("is-active");

	for (const char of chars) {
		if (hamburger.classList.contains("is-active")) {
			char.classList.add("is-black");
			cta.classList.add("black");
		} else if (!hamburger.classList.contains("is-active")) {
			char.classList.remove("is-black");
			cta.classList.remove("black");
		}
	}
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
/*          Cursor Animation             */
/* ##################################### */

const cursor = document.querySelector(".cursor");

const follower = document.querySelector(".cursor-follower");

const links = document.querySelectorAll("a");
const allLinks = [...links, hamburger];

var posX = 0,
	posY = 0,
	mouseX = 0,
	mouseY = 0;

TweenMax.to({}, 0.016, {
	repeat: -1,
	onRepeat: function () {
		posX += (mouseX - posX) / 9;
		posY += (mouseY - posY) / 9;

		TweenMax.set(follower, {
			css: {
				left: posX - 20,
				top: posY - 20,
			},
		});

		TweenMax.set(cursor, {
			css: {
				left: mouseX,
				top: mouseY,
			},
		});
	},
});

for (const link of allLinks) {
	link.addEventListener("mousemove", () => {
		cursor.classList.add("active");
		follower.classList.add("active");
	});

	link.addEventListener("mouseleave", () => {
		cursor.classList.remove("active");
		follower.classList.remove("active");
	});
}

document.addEventListener("mousemove", function (e) {
	mouseX = e.pageX;
	mouseY = e.pageY;
});

/* ##################################### */
/*           Header Animations           */
/* ##################################### */

gsap.from(".header", {
	yPercent: -250,
	duration: 1.5,
	delay: 1,
	stagger: 0.5,
	ease: Expo.easeOut,
	opacity: 0,
});

/* ##################################### */
/*       Hero Section Animations         */
/* ##################################### */

let heroAnim = new gsap.timeline();

let nameChars = document.querySelectorAll(".name .char");

let titleChars = document.querySelectorAll(".title .word");

let ellipse = document.querySelector(".ellipse");

let heroCta = document.querySelector(".cta a");

let ctaElements = [heroCta, ellipse];

heroAnim
	.set(".hero", {
		xPercent: -500,
	})
	.to(".hero", {
		xPercent: 0,
		duration: 1.5,
		ease: Power1.out,
		opacity: 1,
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
			y: 600,
			skewY: 100,
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

ctaElements.forEach((element) => {
	element.addEventListener("mouseover", () => {
		gsap.to(ellipse, {
			width: "15rem",
			duration: 0.05,
			ease: Power1.easeIn,
		});
	});
});
ctaElements.forEach((element) => {
	element.addEventListener("mouseleave", () => {
		gsap.to(ellipse, {
			width: "4rem",
			duration: 0.05,
			ease: Power1.easeIn,
		});
	});
});

/* ##################################### */
/*          Scroll Indicator             */
/* ##################################### */

let scrollIndicator = document.querySelector(".scroll");

gsap.from(".scroll .char", {
	xPercent: -60,
	duration: 1,
	delay: 2,
	opacity: 0,
	ease: "elastic.out(1, 0.5)",
	stagger: 0.03,
});

gsap.to(scrollIndicator, {
	scrollTrigger: {
		trigger: ".projects",
		start: "top center",
		toggleActions: "restart none none reverse",
	},
	opacity: 0,
	duration: 0.25,
});

/* ##################################### */
/*        About Section Animations       */
/* ##################################### */

let lines = document.querySelectorAll(".hamburger .line");

let aboutChars = document.querySelectorAll(".about h2 .char");

let aboutAnim = new TimelineMax({
	scrollTrigger: {
		trigger: ".about",
		start: "top 10%",
		end: "bottom 10%",
		onEnter: () => {
			classForLightBg();
		},
		onLeave: () => {
			classForDarktBg();
		},
		onEnterBack: () => {
			classForLightBg();
		},
		onLeaveBack: () => {
			classForDarktBg();
		},
		stagger: true,
	},
});

function classForLightBg() {
	for (const line of lines) {
		line.classList.add("bg-white");
	}
}
function classForDarktBg() {
	for (const line of lines) {
		line.classList.remove("bg-white");
	}
}

aboutAnim.to(".scroll", {
	opacity: 0,
	ease: Power4.in,
});

let aboutAnim2 = new TimelineMax({
	scrollTrigger: {
		trigger: ".about",
		start: "top 85%",
	},
});

aboutAnim2
	.from(".about", {
		xPercent: -500,
		duration: 1.2,
		ease: Power1.out,
		opacity: 0,
	})
	.from(
		aboutChars,
		{
			xPercent: -60,
			duration: 1.5,
			opacity: 0,
			ease: "elastic.out(1, 0.3)",
			stagger: 0.05,
		},
		"content"
	)
	.from(
		".about p",
		{
			y: -60,
			duration: 0.8,
			opacity: 0,
			ease: Power2.easeOut,
		},
		"content"
	);

/* ##################################### */
/*      Projects Section Animations      */
/* ##################################### */

let subHeadChars = document.querySelectorAll(".sub-head .char");

let projectTl = new TimelineMax({
	scrollTrigger: {
		trigger: ".projects",
		start: "top 70%",
	},
});

projectTl
	.from(subHeadChars, {
		x: -60,
		duration: 1,
		opacity: 0,
		ease: "elastic.out(1, 0.5)",
		stagger: 0.05,
	})
	.from(
		".projects > h2 span",
		{
			y: 600,
			duration: 0.8,
			ease: "power3.out",
			skewY: 50,
		},
		"-=.8"
	);

/* ##################################### */
/*           Logo Animations             */
/* ##################################### */

gsap.to(".header .logo-wrapper", {
	scrollTrigger: {
		trigger: ".foot",
		start: "top 10%",
		toggleActions: "restart none none reverse",
	},
	opacity: 0,
	duration: 0.25,
});

/* ##################################### */
/*          Scroll To Animations         */
/* ##################################### */

let navLinks = document.querySelectorAll(".main-nav ul li a");

let ctaLink = document.querySelector(".cta a");

let backToTop = document.querySelector(".back-to-top a");

let anchorlinks = [...navLinks, ctaLink, backToTop];

for (const link of anchorlinks) {
	let section = document.querySelector(`#${link.href.split("#")[1]}`);
	link.addEventListener("click", (e) => {
		if (section !== null) {
			e.preventDefault();
		}
		gsap.to(window, {
			scrollTo: {
				y: section,
				offsetY: 150,
			},
			duration: 1,
			ease: "power4.inOut",
		});
	});

	link.addEventListener("click", (e) => {
		menuTl.reverse();
		for (const char of chars) {
			char.classList.remove("is-black");
			cta.classList.remove("black");
		}
		hamburger.classList.remove("is-active");
		TweenLite.to(menuTl, 1.5, { progress: 0, ease: "Power2.easeOut" });
	});
}
