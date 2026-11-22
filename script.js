
// FAKHRI FRAMING GALLERY FILTER

const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach(button => {

    button.addEventListener("click", function () {

        const selectedCategory = this.dataset.filter;

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        this.classList.add("active");

        galleryItems.forEach(item => {

            const itemCategory = item.dataset.category;

            if (
                selectedCategory === "all" ||
                selectedCategory === itemCategory
            ) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }

        });

    });

});


// IMAGE LIGHTBOX PREVIEW

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");

document.querySelectorAll(".gallery-item img").forEach(image => {

    image.addEventListener("click", function () {

        lightboxImage.src = this.src;
        lightboxImage.alt = this.alt;
        lightbox.classList.add("show");

    });

});

lightboxClose.addEventListener("click", function () {
    lightbox.classList.remove("show");
});

lightbox.addEventListener("click", function (event) {

    if (event.target === lightbox) {
        lightbox.classList.remove("show");
    }

});

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        lightbox.classList.remove("show");
    }

});

// Mobile Navigation Menu

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.textContent = isOpen ? "✕" : "☰";

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

});

// Close menu after clicking a navigation link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");

    });

});