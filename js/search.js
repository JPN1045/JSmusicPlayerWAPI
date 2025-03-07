document.getElementById("searchBtn").addEventListener("click", async () => {
    const query = document.getElementById("searchInput").value;
    if (!query) return alert("Please enter a search term!");

    try {
        const response = await fetch(`${BASE_URL}?method=track.search&track=${query}&api_key=${API_KEY}&format=json`);
        const data = await response.json();
        displaySearchResults(data.results.trackmatches.track);
    } catch (error) {
        console.error("Error fetching search results:", error);
    }
});

function displaySearchResults(tracks) {
    const container = document.getElementById("suggestions");
    container.innerHTML = "<h3>Search Results</h3>";
    tracks.slice(0, 5).forEach(track => {
        const div = document.createElement("div");
        div.classList.add("search-item");
        div.innerHTML = `<p>${track.name} - ${track.artist}</p>`;
        container.appendChild(div);
    });
}
    