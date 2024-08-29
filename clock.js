document.addEventListener('DOMContentLoaded', () => {
    const clockContainer = document.querySelector('.clockcontainer');
    const changeWallpaperButton = document.getElementById('changeWallpaperButton');
    const tickSound = document.getElementById('tickSound');
    const wallpapers = [
        'images/clock1.png',
        'images/clock2.jpg',
        'images/clock3.png',
        'images/clock4.png',
        'images/clock5.jpg',
        'images/clock6.png',
        'images/clock7.jpg'
        // Add more wallpaper paths as needed
    ];

    // Function to set a random wallpaper
    function setRandomWallpaper() {
        const randomIndex = Math.floor(Math.random() * wallpapers.length);
        clockContainer.style.backgroundImage = `url(${wallpapers[randomIndex]})`;
    }

    // Set a random wallpaper on page load
    setRandomWallpaper();

    // Set up the button click event to change wallpaper
    changeWallpaperButton.addEventListener('click', setRandomWallpaper);

    // Clock functionality
    const hour = document.getElementById('hour');
    const minute = document.getElementById('minute');
    const second = document.getElementById('second');

    function updateClock() {
        const d = new Date();
        const htime = d.getHours();
        const mtime = d.getMinutes();
        const stime = d.getSeconds();
        const hrotation = 30 * htime + mtime / 2;
        const mrotation = 6 * mtime;
        const srotation = 6 * stime;

        hour.style.transform = `rotate(${hrotation}deg)`;
        minute.style.transform = `rotate(${mrotation}deg)`;
        second.style.transform = `rotate(${srotation}deg)`;

        // Play ticking sound every second
        tickSound.currentTime = 0; // Reset to the start of the sound
        tickSound.play(); // Play the sound
    }

    setInterval(updateClock, 1000);
});