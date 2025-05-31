const answers = {
  2: ['whisky', 'cassalla', 'tequila', 'jagger'],
  3: ['sí'],
  4: ['jose'],
  5: ['2025']
};

let currentScreen = 0;

function nextScreen() {
  document.getElementById(`screen${currentScreen}`).classList.remove('active');
  currentScreen++;
  document.getElementById(`screen${currentScreen}`).classList.add('active');
}

function checkAnswer(screen, value) {
  const valid = answers[screen];
  if (valid.includes(value.toLowerCase())) {
    nextScreen();
  } else {
    alert("Respuesta incorrecta.");
  }
}

// Matrix Rain Effect
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = 'アァイィウエカキクケコサシスセソABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#0F0';
  ctx.font = fontSize + 'px monospace';
  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}
setInterval(drawMatrix, 33);

setTimeout(() => {
  nextScreen(); // Salta del "Despierta..." al ?
}, 4000);
