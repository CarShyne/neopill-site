// Neon Pink Binary Matrix Rain

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const binary = "0101010011100101010011010011100101";
const fontSize = 16;
const columns = canvas.width / fontSize;

let drops = [];

for (let i = 0; i < columns; i++) {
  drops[i] = 1;
}

function draw() {
  // Fade effect for trailing
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#ff00ff"; // NEON PINK
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = binary.charAt(Math.floor(Math.random() * binary.length));

    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    // Reset randomly
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(draw, 40);

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
