document.querySelector(".upload-btn").addEventListener("click", function () {
    document.getElementById("fileInput").click();
});

const fileInput = document.getElementById("fileInput");
const gallery = document.getElementById("gallery");

let imageCount = 0;
const maxImages = 30;

fileInput.addEventListener("change", function (event) {
    const files = Array.from(event.target.files);

    files.forEach((file) => {
        if (imageCount >= maxImages) {
            alert("You can upload a maximum of 30 images.");
            return;
        }

        const reader = new FileReader();

        reader.onload = function (e) {
            const imageUrl = e.target.result;

            // Create image container
            const imageCard = document.createElement("div");
            imageCard.classList.add("image-container");

            // Create image element
            const img = document.createElement("img");
            img.src = imageUrl;

            // Create remove button
            const removeBtn = document.createElement("button");
            removeBtn.classList.add("remove-btn");
            removeBtn.textContent = "X";

            // Remove image on button click
            removeBtn.addEventListener("click", function () {
                gallery.removeChild(imageCard);
                imageCount--;
            });

            // Append elements
            imageCard.appendChild(img);
            imageCard.appendChild(removeBtn);
            gallery.appendChild(imageCard);

            // Update image count
            imageCount++;
        };

        reader.readAsDataURL(file);
    });
});

