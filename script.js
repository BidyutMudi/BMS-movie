function playMovie(path) {
    const player = document.getElementById('videoPlayer');
    player.src = path;
    player.play();
}
