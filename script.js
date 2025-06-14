document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let nama = document.getElementById("nama").value;
  let email = document.getElementById("email").value;
  let pesan = document.getElementById("pesan").value;

  fetch("YOUR_GOOGLE_SCRIPT_URL", {
    method: "POST",
    body: JSON.stringify({ nama, email, pesan }),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.text())
    .then((data) => {
      alert("Pesan berhasil dikirim!");
      document.getElementById("contactForm").reset();
    })
    .catch((error) => console.error("Error:", error));
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 50, // Sesuaikan offset jika perlu
        behavior: "smooth",
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const fadeElements = document.querySelectorAll(".fade-in");

  function fadeInOnScroll() {
    fadeElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        element.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", fadeInOnScroll);
  fadeInOnScroll(); // Jalankan sekali saat halaman dimuat
});
