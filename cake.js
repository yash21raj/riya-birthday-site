// ==============================
// Birthday Cake JavaScript
// ==============================
const giftText = document.getElementById("giftText");

const cutBtn = document.getElementById("cutBtn");
const message = document.getElementById("message");
const finalBtn = document.getElementById("finalBtn");
const giftBox = document.getElementById("giftBox");
const confettiContainer = document.getElementById("confetti-container");

const flames = document.querySelectorAll(".flame");

const topLayer = document.querySelector(".top-layer");
const middleLayer = document.querySelector(".middle-layer");
const bottomLayer = document.querySelector(".bottom-layer");

// ==============================
// Confetti
// ==============================

function createConfetti() {

    const colors = [
        "#ff2d75",
        "#ffcc00",
        "#00d4ff",
        "#00c853",
        "#ff6f61",
        "#9c27b0"
    ];

    for (let i = 0; i < 180; i++) {

        const piece = document.createElement("div");

        piece.className = "confetti";

        piece.style.left = Math.random() * 100 + "vw";

        piece.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];

        piece.style.animationDuration =
            (Math.random() * 2 + 2) + "s";

        piece.style.animationDelay =
            Math.random() + "s";

        piece.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        confettiContainer.appendChild(piece);

        setTimeout(() => {

            piece.remove();

        }, 5000);

    }

}

// ==============================
// Cut Cake
// ==============================

cutBtn.addEventListener("click", function () {

    // Disable button
    cutBtn.disabled = true;

    cutBtn.innerHTML = "🎉 Cake Cut!";

    // Blow candles
    flames.forEach(function (flame) {

        flame.style.opacity = "0";

    });

    // Cake animation
    topLayer.style.transform =
        "translateX(-40px) rotate(-8deg)";

    middleLayer.style.transform =
        "translateX(40px) rotate(8deg)";

    bottomLayer.style.transform =
        "scale(0.97)";

    // Confetti
    createConfetti();

    // Show message

    setTimeout(function () {

        message.style.display = "block";

    }, 700);

    // Show gift

    setTimeout(function () {

        giftBox.style.display = "block";

    }, 1500);

    // Show final button

    setTimeout(function () {

        finalBtn.style.display = "inline-block";

    }, 2200);

});

// ==============================
// Gift Animation
// ==============================

giftBox.addEventListener("click", function () {

    giftBox.innerHTML = "🎊";

    giftBox.style.transform = "scale(1.3) rotate(15deg)";

    giftText.style.display = "block";

    setTimeout(function () {

        finalBtn.style.display = "inline-block";

    }, 1000);

});
// ==============================
// Final Surprise
// ==============================

finalBtn.addEventListener("click", function () {

    window.location.href = "final.html";

});