const menuButton = document.getElementById("mobile-menu-toggle");
const mobileMenu = document.querySelector(".nav");
const overlay = document.querySelector(".mobile-overlay");

// Mobile Menu
menuButton.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");
    overlay.classList.toggle("active");
    menuButton.classList.toggle("active");

    const opened = mobileMenu.classList.contains("active");

    menuButton.setAttribute("aria-expanded", opened);

});

// Overlay
overlay.addEventListener("click", () => {

    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
    menuButton.classList.remove("active");

    menuButton.setAttribute("aria-expanded", "false");

});

// Window Resize
window.addEventListener("resize", () => {

    if (window.innerWidth > 991) {

        mobileMenu.classList.remove("active");
        overlay.classList.remove("active");
        menuButton.classList.remove("active");

        menuButton.setAttribute("aria-expanded", "false");

        document.querySelectorAll(".mobile-dropdown").forEach(item => {
            item.classList.remove("active");
        });

    }

});

// Close menu after clicking a normal link
document.querySelectorAll(".nav__link:not(.mobile-dropdown-toggle)").forEach(link => {

    link.addEventListener("click", () => {

        if (window.innerWidth <= 991) {

            mobileMenu.classList.remove("active");
            overlay.classList.remove("active");
            menuButton.classList.remove("active");

            menuButton.setAttribute("aria-expanded", "false");

        }

    });

});

// Home Dropdown
document.querySelectorAll(".mobile-dropdown-toggle").forEach(button => {

    button.addEventListener("click", function (e) {

        if (window.innerWidth <= 991) {

            e.preventDefault();

            const parent = this.parentElement;

            parent.classList.toggle("active");

            this.setAttribute(
                "aria-expanded",
                parent.classList.contains("active")
            );

        }

    });

});
/*====================================
  BACK TO TOP
====================================*/

const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        backToTopButton.classList.add("show");

    } else {

        backToTopButton.classList.remove("show");

    }

});

backToTopButton.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});