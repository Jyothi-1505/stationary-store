const menuButton = document.getElementById("mobileMenuButton");
const mobileMenu = document.querySelector(".navigation");
const backToTopButton = document.getElementById("backToTop");

if (menuButton && mobileMenu) {
  menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("navigation--active");
    menuButton.classList.toggle("active");
    const opened = mobileMenu.classList.contains("navigation--active");
    menuButton.setAttribute("aria-expanded", opened);
  });
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 768 && menuButton && mobileMenu) {
    mobileMenu.classList.remove("navigation--active");
    menuButton.classList.remove("active");
    menuButton.setAttribute("aria-expanded", "false");
  }
});

document.querySelectorAll(".navigation__link").forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768 && menuButton && mobileMenu) {
      mobileMenu.classList.remove("navigation--active");
      menuButton.classList.remove("active");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
});

if (backToTopButton) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  revealElements.forEach(element => {
    revealObserver.observe(element);
  });
} else {
  revealElements.forEach(element => {
    element.classList.add("active");
  });
}