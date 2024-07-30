document.addEventListener('DOMContentLoaded', () => {
    const parent = document.querySelector('.page1');
    const child = document.querySelector('.page1 h1');
    const video = document.querySelector('.page1 video');

    child.addEventListener('mouseover', () => {
        video.style.opacity = 1; // Show the video
        video.play(); // Play the video
    });

    child.addEventListener('mouseout', () => {
        video.style.opacity = 0; // Hide the video
        video.pause(); // Pause the video
        video.currentTime = 0; // Reset the video to the beginning
    });
});
