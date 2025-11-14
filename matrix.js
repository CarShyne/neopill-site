// --- Neon Pink Matrix Particles --- //

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedY = Math.random() * 0.8 + 0.2;
    }
    update() {
        this.y += this.speedY;
        if (this.y > canvas.height) {
            this.y = 0;
            this.x = Math.random() * canvas.width;
        }
    }
    draw() {
        ctx.fillStyle = "rgba(255, 0, 180, 0.8)"; // neon pink
        ctx.shadowColor = "rgba(255, 0, 220)";
        ctx.shadowBlur = 10;
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }
}

function init() {
    particles = [];
    for (let i = 0; i < 300; i++) {
        particles.push(new Particle());
    }
}

function animate() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.30)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p) => {
        p.update();
        p.draw();
    });

    requestAnimationFrame(animate);
}

init();
animate();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});
