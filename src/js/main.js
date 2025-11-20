import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

// Séquence 1
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".intro",
    start: "top top",
    end: "bottom+=1500% top",
    pin: true,
    scrub: true,
    markers: false,
  },
});

tl.to(".intro-bird-image", {
  x: "390%",
  y: "-200%",
  duration: 6,
  ease: "none",
})
  .to(".intro-crique-image", { y: "-95%", duration: 6, ease: "none" }, "+=5")
  .to(
    ".intro-crique-text",
    { ease: "sine.inOut", opacity: "100", duration: 3 },
    "+=2"
  )
  .to(".intro-crique-image", {
    scale: "20",
    x: "720%",
    duration: 7,
    delay: "10",
  })
  .to(".intro-crique-text", { x: "1000%", duration: 7, delay: "-7" })
  .to(".intro", { opacity: "0" });

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

const arrow = document.querySelector(".intro-arrow");
let t = 0;

function animateArrow() {
  // vitesse (plus petit = plus lent)
  t += 0.02;

  // amplitude du mouvement (10 = discret, 20 = plus visible)
  const amplitude = 10;

  // mouvement basé sur un sinus pour un effet fluide
  const y = Math.sin(t) * amplitude;

  arrow.style.transform = `translateX(-50%) translateY(${y}px)`;

  requestAnimationFrame(animateArrow);
}

animateArrow();

tl2
  .to(".vacancier-text", { ease: "sine.inOut", opacity: "100" })

  .to(".vacancier-herbe-right", { x: "-90%", duration: 2 })
  .to(".vacancier-herbe-left", { x: "90%", duration: 2 }, "-=1.95")

  .to(".vacancier-right", { x: "-110%", duration: 3.2 }, "-=1.8")
  .to(".vacancier-left", { x: "80%", duration: 3.2 }, "-=3")

  .to(".vacancier-text", { duration: 2, ease: "sine.inOut", opacity: "0" })

  .to(".vacancier-herbe-right, .vacancier-right", { x: "70%", duration: 1 })
  .to(".vacancier-herbe-left, .vacancier-left", { x: "-70%" }, "-=1");

// Séquence 3
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
  .to(".chateau-text", { ease: "sine.inOut", opacity: "100" })
  .to(".chateau-image", { y: "-140%", duration: 10 })
  .to(".chateau-phrase", { y: "-200%", duration: "5" }, "-=5")
  .to(".chateau-image", { y: "-300%", duration: 12 })
  .to(".chateau-image chateau-text", { opacity: "0" });

// Vidéo
const videoContainer = document.querySelector(".container.video");
const video = document.querySelector("#Video");

ScrollTrigger.create({
  trigger: videoContainer,
  start: "top top",
  markers: true,
  id: "Video",
  onEnter: () => {
    document.body.style.overflow = "hidden";
    video.play();
  },
  onLeave: () => {
    video.pause();
  },
  onEnterBack: () => {
    document.body.style.overflow = "hidden";
    video.play();
  },
  onLeaveBack: () => {
    video.pause();
  },
});
video.addEventListener("ended", (e) => {
  document.body.style.overflow = "";
});

// Timeline pour la première partie (soleil, texte, scale)
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
  .to(".issue-soleil", { x: "100%", y: "-190%", duration: 5 })
  .to(".issue-text", { x: "-30%", y: "430%", duration: 1 }, "-=5")
  .to(".issue", {
    scale: 20,
    x: "-380%",
    y: "780%",
    transformOrigin: "center center",
    duration: 5,
  })
  // On fait disparaître complètement l'élément
  .to(".issue", {
    duration: 0, // instantané
    onComplete: () => {
      document.querySelector(".issue").classList.add("hidden");
    },
  });

// Timeline pour le scroll horizontal
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".horizontal",
      start: "top top",
      end: () => "+=" + document.querySelector(".horizontal-image").scrollWidth, // scroll basé sur la largeur de l'image
      pin: true, // bloque le container
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
      ), // déplace l'image vers la gauche
    ease: "none",
  })
  .to(".horizontal-image", { opacity: 0 }); // disparait à la fin

const tlVieux = gsap.timeline({
  scrollTrigger: {
    trigger: ".vieux",
    start: "top top",
    end: "bottom+=150%", // durée du scroll
    pin: true,
    scrub: true,
    markers: true,
  },
});

// La femme arrive depuis beaucoup plus haut à gauche
tlVieux.fromTo(
  ".vieux-femme",
  { x: "-150%", y: "-150%", opacity: 0, duration: 5 },
  { x: "0%", y: "0%", opacity: 1, ease: "sine.inOut", duration: 5 }
);

// L'homme arrive depuis beaucoup plus bas à droite
tlVieux.fromTo(
  ".vieux-homme",
  { x: "100%", y: "100%", opacity: 0, duration: 5 },
  { x: "0%", y: "0%", opacity: 1, ease: "sine.inOut", duration: 5 },
  "<" // commence en même temps
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
    "<" // commence en même temps que la femme
  )

  .to(".vieux-text", { ease: "sine.inOut", opacity: "1" });

// Timeline pour la partie "end"
const tlEnd = gsap.timeline({
  scrollTrigger: {
    trigger: ".end",
    start: "top top",
    end: "bottom top",
    scrub: 1,
    pin: true, // fixe la section pendant le scroll
    markers: true,
  },
});

// Couverture BD qui arrive depuis la gauche
tlEnd.to(".end-couv-bd", {
  x: "0%",
  opacity: 1,
  duration: 1.5,
  ease: "power2.out",
});

// Les textes finaux apparaissent les uns après les autres depuis la droite
tlEnd.to(
  ".end-all-infos > div",
  {
    x: "0%",
    opacity: 1,
    duration: 1,
    ease: "power2.out",
    stagger: 0.3, // décalage entre chaque élément
  },
  "-=0.5" // commence un peu avant la fin de l'image
);
