const html = document.documentElement;

const navbar = document.querySelector("nav");
const scrollToTopAside = document.querySelector("#scrollToTop");
let lastScrolledPosition = 0;

const modal = document.querySelector("#imageModal");
const modalImage = document.querySelector("#modalImage");
const closeModal = document.querySelector("#closeModal");

const darkModeToggle = document.querySelector("#darkModeToggle");


// Sticky Nav

const navActive = function () {
    if (window.scrollY > 30) {
        navbar.classList.add("active");
    } else {
        navbar.classList.remove("active");
    }
};
window.addEventListener("scroll", navActive);


// Hide Nav 

const navbarSticky = function () {
    if (lastScrolledPosition >= window.scrollY) {
        navbar.classList.remove("header-hide");
    } else {
        navbar.classList.add("header-hide");
    }

    lastScrolledPosition = window.scrollY;
};
window.addEventListener("scroll", navbarSticky);


// Modal

document.querySelectorAll(".card-image-item img").forEach(img => {
    img.addEventListener("click", () => {
        modalImage.src = img.src;
        modal.showModal();
    });
});

closeModal.addEventListener("click", () => {
    modal.close();
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.close();
    }
});


// Scroll to Top

window.addEventListener("scroll", () => {
    if (window.scrollY >= 250) {
        scrollToTopAside.innerHTML = `
            <button id="scrollBtn" class="fixed bottom-20 right-5 bg-gray-900 text-white dark:bg-white dark:text-gray-900 p-3 rounded-full shadow-lg" aria-label="Scroll to top">
                <i class="fa-solid fa-arrow-up"></i>
            </button>
        `;
        scrollToTopAside.classList.add("show");
    } else {
        scrollToTopAside.classList.add("remove");
        scrollToTopAside.innerHTML = "";
    }
});

document.addEventListener("click", (e) => {
    if (e.target.id === "scrollBtn" || e.target.closest("#scrollBtn")) {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
});


// Darkmode

darkModeToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    darkModeToggle.querySelector("i").classList.toggle("fa-moon");
    darkModeToggle.querySelector("i").classList.toggle("fa-sun");

    if (html.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

if (localStorage.getItem("theme") === "dark") {
    html.classList.add("dark");
}