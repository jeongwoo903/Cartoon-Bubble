const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function createCircle() {
    for (let i = 0; i < 10000; i++) {
        const bwX = Math.random() * innerWidth;
        const bwY = Math.random() * innerHeight;

        function rdnColor(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        };

        function cirlceColor() {
            const randomColor = `rgba(${rdnColor(251, 255)}, ${rdnColor(110, 255)},${rdnColor(0, 30)},1)`;
            return randomColor;
        };

        context.beginPath();
        context.rect(bwX, bwY, 50, 10);
        context.fillStyle = cirlceColor();
        context.fill();
    };
};

createCircle();

window.addEventListener("click", function () {
    context.clearRect(0, 0, canvas.width, canvas.height);
    createCircle();
});