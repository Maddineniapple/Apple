// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll("nav ul li a");
    
    // Add click event listeners to each link
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default anchor click behavior
            
            // Get the target section ID from the link's href attribute
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            
            // Scroll to the target section smoothly
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });
    
    // Example: Show an alert when the user clicks on the contact email
    const emailLink = document.querySelector("a[href='mailto:nxtgeninstitute045@gmail.com']");
    emailLink.addEventListener("click", function() {
        alert("You are about to send an email to NXTGEN!");
    });
    
    // Example: Show an alert when the user clicks on the WhatsApp number
    const whatsappLink = document.querySelector("a[href='https://wa.me/919014248652']");
    whatsappLink.addEventListener("click", function() {
        alert("You are about to contact us on WhatsApp!");
    });
});
