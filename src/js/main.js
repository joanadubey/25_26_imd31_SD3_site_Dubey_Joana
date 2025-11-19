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
// const videoContainer = document.querySelector(".container.video");
// const video = document.querySelector("#Video");

// ScrollTrigger.create({
//   trigger: ".sequence-1",
//   start: "bottom bottom",
//   markers: true,
//   id: "Video",
//   onEnter: () => {
//     videoContainer.classList.add("video-visible");
//     video.play();
//   },
//   onLeave: () => {
//     videoContainer.classList.remove("video-visible");
//     video.pause();
//   },
//   onEnterBack: () => video.play(),
//   onLeaveBack: () => video.pause(),
// });

// video.addEventListener("ended", () => {
//   // Supprimer les anciens triggers
//   ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

//   // Passer à la séquence suivante
//   document.querySelector(".sequence-1").classList.remove("visible");
//   document.querySelector(".sequence-2").classList.add("visible");

//   // Recalcul du scroll
//   ScrollTrigger.refresh();

// });

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
