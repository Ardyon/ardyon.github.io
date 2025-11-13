const burgerMenu = document.querySelector("#link-burger-icon");
const linksMenu = document.querySelector("nav");
const links = linksMenu.querySelectorAll("a");
const images = document.querySelectorAll(".image-container img");

const toggleLinksMenuVisibility = () => {
  linksMenu.classList.toggle("active");
};

const convertRemToPixels = (rem) => {
  return rem * parseFloat(getComputedStyle(document.body).fontSize);
};

burgerMenu.addEventListener("click", () => toggleLinksMenuVisibility());

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.target.blur();

    const href = e.target.attributes.href.value;

    // Scroll to element with an offset
    if (href.startsWith("#")) {
      e.preventDefault();

      const elem = document.querySelector(href);
      const scrollY = elem.offsetTop - convertRemToPixels(8);

      window.history.replaceState({}, "", href);
      window.scrollTo({ top: scrollY, behavior: "smooth" });
    }

    toggleLinksMenuVisibility();
  });
});

images.forEach((image) => {
  image.addEventListener("click", () => {
    window.open(image.src, "_blank");
  });
});
