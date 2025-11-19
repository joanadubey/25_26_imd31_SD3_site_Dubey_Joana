import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

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
  trigger: ".sequence-1",
  start: "bottom bottom",
  markers: true,
  id: "Video",
  onEnter: () => {
    videoContainer.classList.add("video-visible");
    video.play();
  },
  onLeave: () => {
    videoContainer.classList.remove("video-visible");
    video.pause();
  },
  onEnterBack: () => video.play(),
  onLeaveBack: () => video.pause(),
});

video.addEventListener("ended", () => {
  // Supprimer les anciens triggers
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

  // Passer à la séquence suivante
  document.querySelector(".sequence-1").classList.remove("visible");
  document.querySelector(".sequence-2").classList.add("visible");

  // Recalcul du scroll
  ScrollTrigger.refresh();

  // === Création du trigger pour la séquence 2 (issue) ===
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
    .to(".issue-soleil", { x: "100%", y: "-190%", duration: "5" })
    .to(".issue-text", { x: "-30%", y: "430%", duration: "1" }, "-=5")
    .to(".issue", {
      scale: 20, // zoom de la "caméra"
      x: "-380%", // ajuster pour centrer sur le soleil
      y: "780%",
      transformOrigin: "center center",
      duration: 5,
    })
    .to(".horizontal", {
      opacity: "1",
      duration: "1",
    });
});

// ScrollTrigger.refresh();
// // === Animation scroll horizontal ===
// const tlHorizontal = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".horizontal", // déclencheur
//     start: "bottom bottom",
//     end: "+=2000", // distance de scroll horizontale (à ajuster selon la longueur de l'image)
//     pin: true, // la section reste fixe
//     scrub: true, // animation fluide au scroll
//     markers: true, // mettre true pour tester
//   },
// });

// // Animation : défilement horizontal de l’image
// tlHorizontal.to(".horizontal-image", {
//   x: "-100%",
//   ease: "none",
// });
