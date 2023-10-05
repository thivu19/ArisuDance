const imageContainer = document.querySelector(".image-container");
const audio = document.getElementById("hover-audio");
const hoverGif = document.querySelector(".hover-gif");
const endImage = document.getElementById("end-image");
audio.volume = 0.1;

function replaceGifWithImage() {
    hoverGif.style.display = "none";
    endImage.style.display = "block";
}

function resetImages() {
    hoverGif.style.display = "block";
    endImage.style.display = "none";
}

imageContainer.addEventListener("mouseenter", function() {
    audio.style.display = "block";
    resetImages();
    audio.play();
});

imageContainer.addEventListener("mouseleave", function() {
    audio.pause();
    //audio.currentTime = 0; // Reset the audio to the beginning
});

audio.addEventListener("ended", function() {
    replaceGifWithImage();
});