// Profile Form Handling
document.getElementById("profileForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const standard = document.getElementById("standard").value;
  const performance = document.getElementById("performance").value;

  alert(`Profile Saved! \nName: ${name}\nStandard: ${standard}\nPerformance: ${performance}`);
});

// Scroll to sections smoothly
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

