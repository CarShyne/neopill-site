const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

// Resize to FULLSCREEN for all devices
function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

// Binary characters
const chars = "01".split("");
const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);

let drops = [];
for (let i = 0; i < columns; i++) drops[i] = 1;

// Animation loop
function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#ff00ff";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        // Reset drop randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }

    requestAnimationFrame(draw);
}

draw();
