async function fetchGenres() {
    try {
        const response = await fetch(`${BASE_URL}?method=tag.getTopTags&api_key=${API_KEY}&format=json`);
        const data = await response.json();
        displayCarousel(data.toptags.tag, "genreCarousel");
    } catch (error) {
        console.error("Error fetching genres:", error);
    }
}
