document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("audio");
    const musicFileInput = document.getElementById("musicFileInput");

    audio.setAttribute("controlsList", "nodownload");

    musicFileInput.addEventListener("change", function (e) {
        const file = e.target.files[0];
        if (file) {
            const objectURL = URL.createObjectURL(file);
            audio.src = objectURL;
            audio.play();
        }
    });
});
