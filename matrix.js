// Pink Matrix Rain (NEO PILL Edition)

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

// Auto-resize to full screen
function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

// Characters (binary)    
const letters = "010101101001001011001011010".split("");

let fontSize = 18;
let columns = Math.floor(window.innerWidth / fontSize);

// Drops (one per column)
let drops = new Array(columns).fill(1);

function draw() {
    // Shadow fade to create trailing effect
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#ff00ff";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const char = letters[Math.floor(Math.random() * letters.length)];

        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        // Reset drop randomly at bottom
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

setInterval(draw, 33);
