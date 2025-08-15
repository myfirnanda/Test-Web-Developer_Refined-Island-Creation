document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from("nav h1", {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    let tl = gsap.timeline();

    tl.from(".col-span-2.sm\\:col-span-1 .py-3", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2
    })
    .from("section p", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    }, "-=0.5.5");

    gsap.from("#card-image-container .card-image-item", {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.15,
        scrollTrigger: {
            trigger: "#card-image-container",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });

    gsap.from("button", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)",
        delay: 1.5
    });
});
