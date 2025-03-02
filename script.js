document.getElementById("search-button").addEventListener("click", function() {
    let searchQuery = document.getElementById("search-input").value.toLowerCase();

    
    let searchLinks = {
        "flower": "https://www.pexels.com/search/flower/",
        "city": "https://www.pexels.com/search/city/",
        "archietecture": "https://www.pexels.com/search/architecture/",
        "forest": "https://www.pexels.com/search/forest/",
        "animal": "https://www.pexels.com/search/animal/",
        "nature": "https://www.pexels.com/search/Nature/"
    };

    if (searchLinks[searchQuery]) {
        window.location.href = searchLinks[searchQuery]; // Redirect to the link
    } else {
        alert("No predefined link found for this search. Try 'flower', 'city', etc.");
    }
});



document.addEventListener("DOMContentLoaded", function () {
    const contactLink = document.getElementById("contact-link");
    const homeLink = document.querySelector("nav ul li a.active");
    const contactForm = document.getElementById("contact-form");

    // Function to remove 'active' class from all links
    function removeActiveClass() {
        document.querySelectorAll("nav ul li a").forEach(link => link.classList.remove("active"));
    }

    // Toggle contact form on "Contact" click
    contactLink.addEventListener("click", function (event) {
        event.preventDefault();

        // Remove active class from all links
        removeActiveClass();

        // Toggle contact form visibility
        if (contactForm.style.display === "none" || contactForm.style.display === "") {
            contactForm.style.display = "block";
            contactLink.classList.add("active"); // Add active class
        } else {
            contactForm.style.display = "none";
            contactLink.classList.remove("active"); // Remove active class
        }
    });

    // Close form when clicking outside
    document.addEventListener("click", function (event) {
        if (!contactForm.contains(event.target) && event.target !== contactLink) {
            contactForm.style.display = "none";
            contactLink.classList.remove("active"); // Remove active class when closed
        }
    });

    // Form submission
    document.getElementById("submit-btn")?.addEventListener("click", function(event) {
        event.preventDefault();
        contactForm.style.display = "none";
        contactLink.classList.remove("active"); // Remove active after submit
        alert("Form submitted successfully!");
    });
});

