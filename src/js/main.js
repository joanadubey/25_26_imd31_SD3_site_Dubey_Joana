import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const video = document.querySelector("#Video");
const videoContainer = document.querySelector(".container.video");

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".intro",
    start: "top top",
    end: "bottom+=900% top",
    pin: true,
    scrub: true,
    markers: false,
  },
});

tl.to(".intro-bird-image", { x: "390%", y: "-200%", duration: 8, ease: "none" })
  .to(".intro-crique-image", { y: "-100%", duration: 5, ease: "none" })
  .to(
    ".intro-crique-text",
    { opacity: 1, duration: 4, ease: "sine.inOut" },
    "+=2"
  )
  .to(".intro-crique-image", {
    scale: "20",
    x: "720%",
    duration: 5,
    delay: "3",
  })
  .to(".intro-crique-text", { x: "1000%", duration: 7, delay: "-5" })
  .to(".intro", { opacity: "0" });

const arrow = document.querySelector(".intro-arrow");
let t = 0;
function animateArrow() {
  t += 0.02;
  const amplitude = 10;
  const y = Math.sin(t) * amplitude;
  arrow.style.transform = `translateX(-50%) translateY(${y}px)`;
  requestAnimationFrame(animateArrow);
}
animateArrow();

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".vacancier",
    start: "top top",
    end: "bottom+=500% top",
    pin: true,
    scrub: 2,
    markers: false,
  },
});

tl2
  .to(".vacancier-text", { opacity: 1, duration: 4, ease: "sine.inOut" })
  .to(".vacancier-herbe-right", { x: "-90%", duration: 2 })
  .to(".vacancier-herbe-left", { x: "90%", duration: 2 }, "-=1.95")
  .to(".vacancier-right", { x: "-110%", duration: 3.2 }, "-=1.8")
  .to(".vacancier-left", { x: "80%", duration: 3.2 }, "-=3")
  .to(".vacancier-text", { duration: 1, ease: "sine.inOut", opacity: "0" })
  .to(".vacancier-herbe-right, .vacancier-right", { x: "70%", duration: 1 })
  .to(".vacancier-herbe-left, .vacancier-left", { x: "-70%" }, "-=1");

const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".chateau",
    start: "top top",
    end: "bottom+=500% top",
    pin: true,
    scrub: true,
    markers: false,
  },
});

tl3
  .to(".chateau-text", { opacity: 1, duration: 4, ease: "sine.inOut" })
  .to(".chateau-image", { y: "-140%", duration: 10 })
  .to(".chateau-phrase", { y: "-200%", duration: "5" }, "-=5")
  .to(".chateau-image", { y: "-300%", duration: 12 })
  .to(".chateau-image chateau-text", { opacity: "0" })
  .add(() => {
    videoContainer.style.opacity = 1;
    videoContainer.style.pointerEvents = "auto";
    video.play();
  });

video.addEventListener("ended", () => {
  videoContainer.style.opacity = 0;
  videoContainer.style.pointerEvents = "none";
  gsap.to(window, { duration: 0, scrollTo: { y: ".issue", offsetY: 0 } });
});

const tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".issue",
    start: "top top",
    end: "bottom+=200% top",
    pin: true,
    scrub: 5,
    markers: false,
  },
});

tl4
  .to(".issue-soleil", { x: "100%", y: "-190%", duration: 5 }, "+=5")
  .to(".issue-text", { x: "-30%", y: "430%", duration: 5 }, "-=5")
  .to(".issue", {
    scale: 20,
    x: "-380%",
    y: "780%",
    transformOrigin: "center center",
    duration: 5,
  })
  .to(".issue", {
    duration: 0,
    onComplete: () => {
      document.querySelector(".issue").classList.add("hidden");
    },
  });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".horizontal",
      start: "top top",
      end: () => "+=" + document.querySelector(".horizontal-image").scrollWidth,
      pin: true,
      scrub: true,
      anticipatePin: 1,
      markers: true,
    },
  })
  .to(".horizontal-image", {
    x: () =>
      -(
        document.querySelector(".horizontal-image").scrollWidth -
        window.innerWidth
      ),
    ease: "none",
  })
  .to(".horizontal-image", { opacity: 0 }),
  "+=2";

const tlVieux = gsap.timeline({
  scrollTrigger: {
    trigger: ".vieux",
    start: "top top",
    end: "bottom+=150%",
    pin: true,
    scrub: true,
    markers: true,
  },
});

tlVieux.fromTo(
  ".vieux-femme",
  { x: "-150%", y: "-150%", opacity: 0, duration: 5 },
  { x: "0%", y: "0%", opacity: 1, ease: "sine.inOut", duration: 5 }
);
tlVieux.fromTo(
  ".vieux-homme",
  { x: "100%", y: "100%", opacity: 0, duration: 5 },
  { x: "0%", y: "0%", opacity: 1, ease: "sine.inOut", duration: 5 },
  "<"
);

tlVieux
  .to(".vieux-femme", {
    x: "-200%",
    y: "-200%",
    opacity: 0,
    duration: 2,
    ease: "power2.in",
    delay: 5,
  })
  .to(
    ".vieux-homme",
    { x: "150%", y: "150%", opacity: 0, duration: 2, ease: "power2.in" },
    "<"
  )
  .to(".vieux-text", { ease: "sine.inOut", opacity: "1", duration: 3 }, "-=2")
  .to(".vieux-text", { ease: "sine.inOut", opacity: "0", duration: 3 }, "+=7");

const tlEnd = gsap.timeline({
  scrollTrigger: {
    trigger: ".end",
    start: "top top",
    end: "bottom top",
    scrub: 1,
    pin: true,
    markers: true,
  },
});

tlEnd.to(".black-button", { opacity: 0, ease: "power2.out" });
tlEnd.to(".end-couv-bd", {
  x: "0%",
  opacity: 1,
  duration: 1.5,
  ease: "power2.out",
});
tlEnd.to(
  ".end-all-infos > div",
  { x: "0%", opacity: 1, duration: 1, ease: "power2.out", stagger: 0.3 },
  "-=0.5"
);
tlEnd.to(
  ".end-button",
  { x: "0%", opacity: 1, duration: 1, ease: "power2.out" },
  "-=0.5"
);

gsap.fromTo(
  ".reload-button",
  { opacity: 0, y: 50 }, // invisible et légèrement en bas
  {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".end",
      start: "bottom+=50 top", // déclenche après la fin de .end
      end: "bottom top+=300", // zone où le bouton reste visible
      toggleActions: "play none none reverse",
      markers: true,
    },
  }
);

// Fonction du bouton
document.getElementById("firstVisitBtn").addEventListener("click", function () {
  const url = "http://localhost:64143/";
  window.open(url + "?v=" + new Date().getTime(), "_blank");
});

document.addEventListener("DOMContentLoaded", () => {
  const whiteBtn = document.querySelector("#fixed-btn");
  const blackBtn = document.querySelector("#fixed-btn-black");
  const video = document.querySelector("#Video");

  if (whiteBtn && blackBtn && video) {
    blackBtn.style.opacity = 0;
    blackBtn.style.pointerEvents = "none";

    video.addEventListener("ended", () => {
      gsap.to(whiteBtn, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          whiteBtn.style.pointerEvents = "none";
        },
      });

      blackBtn.style.pointerEvents = "auto";
      gsap.to(blackBtn, { opacity: 1, duration: 0.5 });
    });
  }
});
