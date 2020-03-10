const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function createCircle() {
    for (let i = 0; i < 500; i++) {
        const bwX = Math.random() * innerWidth;
        const bwY = Math.random() * innerHeight;

        function rdnColor(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        };

        function cirlceColor() {
            const randomColor = `rgba(${rdnColor(255, 255)}, ${rdnColor(100, 255)},${rdnColor(200, 255)},1)`;
            return randomColor;
        };

        context.beginPath();
        context.arc(bwX, bwY, 10, 0, Math.PI * 2, false);
        context.fillStyle = cirlceColor();
        context.fill();
    };
};

createCircle();

setInterval(() => {
    createCircle();
}, 100);

window.addEventListener("click", function () {
    context.clearRect(0, 0, canvas.width, canvas.height);
})