// ---------------- HOME ----------------

const startBtn = document.getElementById("startBtn");

if (startBtn) {

    startBtn.onclick = function () {

        window.location.href = "password.html";

    };

}



// ---------------- PASSWORD ----------------

const passwordBtn = document.getElementById("passwordBtn");

if (passwordBtn) {
    passwordBtn.onclick = function () {

        const pass = document.getElementById("password").value;

        if (pass === "0207") {
            window.location.href = "letter.html";
        } else {
            alert("Wrong Password ❤️");
        }
    };
}

// ---------------- LETTER ----------------

const openGallery = document.getElementById("openGallery");

if (openGallery) {
    openGallery.onclick = function () {
        window.location.href = "gallery.html";
    };
}

// ---------------- GALLERY ----------------

const images = [];

for (let i = 1; i <= 21; i++) {
    images.push(`assets/photo/${i}.jpeg`);
}

let imageIndex = 0;

const photo = document.getElementById("galleryImage");
const currentPhoto = document.getElementById("currentPhoto");
const totalPhotos = document.getElementById("totalPhotos");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

if (photo) {

    totalPhotos.textContent = images.length;

    function showImage() {
        photo.src = images[imageIndex];
        currentPhoto.textContent = imageIndex + 1;
    }

    showImage();

    nextBtn.addEventListener("click", () => {

    if (imageIndex === images.length - 1) {
        window.location.href = "videos.html";
        return;
    }

    imageIndex++;
    showImage();

});

    prevBtn.addEventListener("click", () => {
        imageIndex = (imageIndex - 1 + images.length) % images.length;
        showImage();
    });
}
// ---------------- VIDEOS ----------------

const videos = [];

for (let i = 1; i <= 5; i++) {
    videos.push(`assets/video/video${i}.mp4`);
}

let videoIndex = 0;

const videoPlayer = document.getElementById("videoPlayer");

if (videoPlayer) {

    const videoCounter = document.getElementById("videoCounter");

    function showVideo() {

        videoPlayer.src = videos[videoIndex];
        videoCounter.innerHTML = `Video ${videoIndex + 1} / ${videos.length}`;
    }

    showVideo();

    document.getElementById("nextVideo").onclick = function () {

        videoIndex++;

        if (videoIndex >= videos.length)
            videoIndex = 0;

        showVideo();
    };

    document.getElementById("prevVideo").onclick = function () {

        videoIndex--;

        if (videoIndex < 0)
            videoIndex = videos.length - 1;

        showVideo();
    };

    document.getElementById("continueCake").onclick = function () {
        window.location.href = "cake.html";
    };
}
// ===============================
// TYPEWRITER EFFECT
// ===============================

const typewriter = document.getElementById("typewriter");

if (typewriter) {

    const message = `Dear Riya ❤️,

Happy Birthday to the most amazing person in my life.

Every smile of yours makes my day brighter.

I hope this birthday brings you endless happiness,
success, love and unforgettable memories.

Thank you for every beautiful memory we've shared.

May God always bless you with happiness,
good health and lots of success.

Happy Birthday Once Again My Princess ❤️

Forever Yours,
Yash ❤️`;

    let index = 0;

    function typeLetter() {

        if (index < message.length) {

            typewriter.innerHTML += message.charAt(index);

            index++;

            setTimeout(typeLetter, 45);

        }

    }

    typeLetter();

}


// ===============================
// PHOTO SLIDESHOW
// ===============================

const slide = document.getElementById("slide");

if (slide) {

    const photos = [

        "assets/photo/1.jpeg",
        "assets/photo/2.jpeg",
        "assets/photo/3.jpeg",
        "assets/photo/4.jpeg",
        "assets/photo/5.jpeg"

    ];

    let current = 0;

    setInterval(function () {

        current++;

        if (current >= photos.length) {

            current = 0;

        }

        slide.style.opacity = "0";

        setTimeout(function () {

            slide.src = photos[current];

            slide.style.opacity = "1";

        }, 500);

    }, 3000);

}


// ===============================
// FIREWORKS
// ===============================

const fireworks = document.getElementById("fireworks");

if (fireworks) {

    function createFirework() {

        const firework = document.createElement("div");

        firework.className = "firework";

        firework.style.left = Math.random() * 100 + "%";

        firework.style.top = Math.random() * 100 + "%";

        firework.style.backgroundColor =
            `hsl(${Math.random() * 360},100%,60%)`;

        fireworks.appendChild(firework);

        setTimeout(function () {

            firework.remove();

        }, 1000);

    }

    setInterval(createFirework, 400);

}