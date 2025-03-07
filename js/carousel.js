function displayCarousel(items, carouselId) {
    const carousel = document.getElementById(carouselId);
    carousel.innerHTML = ""; // Clear existing content

    items.slice(0, 10).forEach(item => {
        const imageUrl = item.image && item.image.length > 0 ? item.image[item.image.length - 1]["#text"] : "default.jpg";

        const div = document.createElement("div");
        div.classList.add("carousel-item");
        div.innerHTML = `
            <img src="${imageUrl}" alt="${item.name}" class="carousel-img">
            <p>${item.name}</p>
        `;
        carousel.appendChild(div);
    });
}
