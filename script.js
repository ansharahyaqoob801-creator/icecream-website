// Purple Icecream 3D website interactions
document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector(".nav");
  const menuButton = document.querySelector(".menu-toggle");

  if (nav && menuButton) {
    menuButton.addEventListener("click", function () {
      const open = nav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(open));
      menuButton.textContent = open ? "✕" : "☰";
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.textContent = "☰";
        nav.querySelectorAll("a").forEach(function (item) { item.classList.remove("active"); });
        link.classList.add("active");
      });
    });
  }

  // Generate small twinkling stars across the page.
  const sparkleLayer = document.querySelector(".sparkle-layer");
  if (sparkleLayer) {
    const marks = ["✦", "✧", "⋆", "·"];
    for (let i = 0; i < 45; i += 1) {
      const star = document.createElement("span");
      star.className = "twinkle";
      star.textContent = marks[Math.floor(Math.random() * marks.length)];
      star.style.left = Math.random() * 100 + "%";
      star.style.top = Math.random() * 100 + "%";
      star.style.animationDelay = Math.random() * 5 + "s";
      star.style.animationDuration = (1.8 + Math.random() * 3) + "s";
      star.style.fontSize = (8 + Math.random() * 13) + "px";
      sparkleLayer.appendChild(star);
    }
  }

  // Interactive demo cart; it does not process real payments.
  let cartCount = 0;
  const count = document.querySelector("#cart-count");
  const message = document.querySelector("#cart-message");
  document.querySelectorAll(".add-button").forEach(function (button) {
    button.addEventListener("click", function () {
      cartCount += 1;
      if (count) count.textContent = String(cartCount);
      if (message) message.textContent = " " + (button.dataset.flavor || "A sweet treat") + " added!";
      const old = button.innerHTML;
      button.innerHTML = "Added ✓";
      button.disabled = true;
      window.setTimeout(function () {
        button.innerHTML = old;
        button.disabled = false;
      }, 1100);
    });
  });

  // Demo newsletter form; no data is sent or stored.
  const form = document.querySelector("#newsletter-form");
  const formMessage = document.querySelector(".form-message");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (formMessage) formMessage.textContent = "✨ Thanks for joining! This demo does not send emails.";
      form.reset();
    });
  }

  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();

  const topButton = document.querySelector(".back-to-top");
  if (topButton) {
    window.addEventListener("scroll", function () {
      topButton.classList.toggle("visible", window.scrollY > 450);
    });
    topButton.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
