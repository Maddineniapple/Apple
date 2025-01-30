/// Show/hide sections based on navigation
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const contentSections = document.querySelectorAll(".content-section");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Remove active class from all links and sections
      navLinks.forEach((navLink) => navLink.classList.remove("active"));
      contentSections.forEach((section) => section.classList.remove("active"));

      // Add active class to the clicked link and corresponding section
      const target = link.getAttribute("href").substring(1); // Remove the #
      link.classList.add("active");
      document.getElementById(target).classList.add("active");
    });
  });
});
