let tiles = document.querySelectorAll(".tile");

tiles.forEach((tile) => {
    tile.addEventListener('click', () => {
        removePrevious();
        tile.setAttribute("active", "true");
        tile.innerHTML = tile.getAttribute("caption");
    });
});

function removePrevious() {
    tiles.forEach((tile) => {
        tile.removeAttribute("active");
        tile.innerHTML = "";
    })
}

let tilesBackground = document.getElementById("main-nav");
tilesBackground.addEventListener("click", removePrevious);