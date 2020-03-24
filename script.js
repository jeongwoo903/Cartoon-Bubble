const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const mouse = {
    x: undefined,
    y: undefined
}

const colorArray = [
    "#30A9DE",
    "#EFDC05",
    "#E53A40",
    "#090707"
]

window.addEventListener("mousemove", function (e) {
    mouse.x = event.x;
    mouse.y = event.y;
})

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
})

//Circle 함수 생성
function Circle(x, y, dx, dy, r) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.r = r;
    this.minR = r;
    this.color = colorArray[Math.floor(Math.random() * 4)];

    this.draw = function () {
        context.beginPath();
        context.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        context.fillStyle = this.color;
        context.fill();
        context.stroke();
    }

    this.update = function () {
        const maxR = 50;
        const mouseArea = 100;

        if (this.x + this.r > innerWidth || this.x - this.r < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.r > innerHeight || this.y - this.r < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        //interactivity
        if (mouse.x - this.x < mouseArea && mouse.x - this.x > -mouseArea && mouse.y - this.y < mouseArea && mouse.y - this.y > -mouseArea) {
            if (this.r < maxR) {
                this.r += 1;
            }
        } else if (this.r > this.minR) {
            this.r -= 1;
        }

        this.draw();
    }
}

let circleArray = [];

function init() {
    // 객체를 담을 배열 생성
    circleArray = [];

    // 500개의 객체의 생성과 배열에 객체를 push함.
    for (let i = 0; i < 500; i++) {
        let r = Math.random() * 20 + 1;
        let x = Math.random() * (innerWidth - r * 2) + r;
        let y = Math.random() * (innerHeight - r * 2) + r;
        let dx = (Math.random() - 0.5) * 8;
        let dy = (Math.random() - 0.5) * 8;

        circleArray.push(new Circle(x, y, dx, dy, r));
    }

}

// animation 효과
function animation() {
    requestAnimationFrame(animation);
    context.clearRect(0, 0, innerWidth, innerHeight);

    // 배열에 담긴 원의 수만큼 원을 화면에 그림
    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}

init();
animation();