const API_KEY = "46b0808d025fd640ed0fee917ac660bf";
const BASE_URL = "https://ws.audioscrobbler.com/2.0/";

async function fetchTrending() {
    try {
        const response = await fetch(`${BASE_URL}?method=chart.gettoptracks&api_key=${API_KEY}&format=json`);
        const data = await response.json();
        displayCarousel(data.tracks.track, "trendingCarousel");
    } catch (error) {
        console.error("Error fetching trending songs:", error);
    }
}
