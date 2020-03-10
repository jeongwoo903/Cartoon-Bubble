const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Circle 함수 생성
function Circle(x, y, dx, dy, r) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.r = r;
    this.draw = function () {
        context.beginPath();
        context.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        context.strokeStyle = "rgb(0, 162, 255)";
        context.stroke();
    }

    this.update = function () {
        if (this.x + this.r > innerWidth || this.x - this.r < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.r > innerHeight || this.y - this.r < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}

// 객체를 담을 배열 생성
let circleArray = [];

// 1000개의 객체의 생성과 배열에 객체를 push함.
for (let i = 0; i < 500; i++) {
    let r = Math.random() * 25;
    let x = Math.random() * (innerWidth - r * 2) + r;
    let y = Math.random() * (innerHeight - r * 2) + r;
    let dx = (Math.random() - 0.5) * 8;
    let dy = (Math.random() - 0.5) * 8;

    circleArray.push(new Circle(x, y, dx, dy, r));
}

// animation 효과
function animation() {
    requestAnimationFrame(animation);
    context.clearRect(0, 0, innerWidth, innerHeight);

    // 배열에 담긴 원의 수 만큼 원을 화면에 그림
    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}

animation();