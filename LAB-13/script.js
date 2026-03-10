// core setup and resizing logic
let canvas1, canvas2, canvas3, canvas4;

function resizeCanvases() {
    // size each canvas to match computed CSS dimensions
    [canvas1, canvas2, canvas3, canvas4].forEach(c => {
        c.width = c.clientWidth;
        c.height = c.clientHeight;
    });
    drawAll();
}

// high-level redraw
function drawAll() {
    drawMickey(canvas1.getContext('2d'));
    drawSmiley(canvas2.getContext('2d'));
    drawHouse(canvas3.getContext('2d'));
    drawAtom(canvas4.getContext('2d'));
}

// draw routines (coordinates scaled to 300×300 template, so canvas becomes responsive)
function drawMickey(ctx) {
    const w = ctx.canvas.width;
    ctx.clearRect(0, 0, w, w);
    const scale = w / 300;
    ctx.save();
    ctx.scale(scale, scale);

    // Ears (black)
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(80, 80, 35, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(220, 80, 35, 0, Math.PI * 2);
    ctx.fill();

    // Face (light skin tone)
    ctx.fillStyle = '#fde3cb';
    ctx.beginPath();
    ctx.arc(150, 150, 80, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Eyes (two black ovals with black outlines)
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.ellipse(128, 120, 10, 16, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(172, 120, 10, 16, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Nose (black)
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.ellipse(150, 157, 10, 8, 0, 0, Math.PI * 2);
    ctx.fill();

    // Mouth (black curve with a line underneath to create a smile; filled with white to create an open mouth effect)
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(150, 180, 30, 0, Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.lineTo(117, 180);
    ctx.lineTo(183, 180);
    ctx.stroke();
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(150, 180, 30, 0, Math.PI);
    ctx.fill();
    ctx.restore();
}

function drawSmiley(ctx) {
    const w = ctx.canvas.width;
    const scale = w / 300;
    ctx.clearRect(0,0,w,w);
    ctx.save();
    ctx.scale(scale, scale);
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.arc(150, 150, 80, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(122, 125, 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(178, 125, 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(150, 170, 35, 0, Math.PI);
    ctx.stroke();
    ctx.restore();
}

function drawHouse(ctx) {
    const w = ctx.canvas.width;
    const scale = w / 300;
    ctx.clearRect(0,0,w,w);
    ctx.save();
    ctx.scale(scale, scale);
    ctx.fillStyle = '#D2691E';
    ctx.beginPath();
    ctx.moveTo(75, 150);
    ctx.lineTo(225, 150);
    ctx.lineTo(150, 50);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = '#CD853F';
    ctx.fillRect(75, 150, 150, 120);
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(130, 190, 40, 80);
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.arc(168, 230, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#87CEEB';
    ctx.fillRect(90, 165, 35, 35);
    ctx.fillRect(175, 165, 35, 35);
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(107.5, 165);
    ctx.lineTo(107.5, 200);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(90, 182.5);
    ctx.lineTo(125, 182.5);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(192.5, 165);
    ctx.lineTo(192.5, 200);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(175, 182.5);
    ctx.lineTo(210, 182.5);
    ctx.stroke();
    ctx.restore();
}

function drawAtom(ctx) {
    const w = ctx.canvas.width;
    const scale = w / 300;
    ctx.clearRect(0, 0, w, w);
    ctx.save();
    ctx.scale(scale, scale);

    // Background circle (light gray)
    ctx.fillStyle = '#f0f0f0';
    ctx.beginPath();
    ctx.arc(150, 150, 140, 0, Math.PI * 2);
    ctx.fill();

    // Electron orbits (blue)
    ctx.strokeStyle = '#47848F';
    ctx.lineWidth = 4;

    // Horizontal orbit
    ctx.beginPath();
    ctx.ellipse(150, 150, 90, 30, 0, 0, Math.PI * 2);
    ctx.stroke();

    // Vertical orbit
    ctx.beginPath();
    ctx.ellipse(150, 150, 30, 90, 0, 0, Math.PI * 2);
    ctx.stroke();

    // Diagonal orbit (45 degrees)
    ctx.beginPath();
    ctx.ellipse(150, 150, 90, 30, Math.PI / 4, 0, Math.PI * 2);
    ctx.stroke();

    // Diagonal orbit (135 degrees)
    ctx.beginPath();
    ctx.ellipse(150, 150, 30, 90, Math.PI / 4, 0, Math.PI * 2);
    ctx.stroke();

    // Nucleus (blue)
    ctx.fillStyle = '#47848F';
    ctx.beginPath();
    ctx.arc(150, 150, 22, 0, Math.PI * 2);
    ctx.fill();

    // Electrons (blue)
    ctx.fillStyle = '#47848F';

    // Top electron
    ctx.beginPath();
    ctx.arc(150, 60, 8, 0, Math.PI * 2);
    ctx.fill();

    // Bottom electron
    ctx.beginPath();
    ctx.arc(150, 240, 8, 0, Math.PI * 2);
    ctx.fill();

    // Left electron
    ctx.beginPath();
    ctx.arc(60, 150, 8, 0, Math.PI * 2);
    ctx.fill();

    // Right electron
    ctx.beginPath();
    ctx.arc(240, 150, 8, 0, Math.PI * 2);
    ctx.fill();

    // Top-left electron
    ctx.beginPath();
    ctx.arc(86.36, 86.36, 8, 0, Math.PI * 2);
    ctx.fill();

    // Top-right electron
    ctx.beginPath();
    ctx.arc(213.64, 86.36, 8, 0, Math.PI * 2);
    ctx.fill();

    // Bottom-left electron
    ctx.beginPath();
    ctx.arc(86.36, 213.64, 8, 0, Math.PI * 2);
    ctx.fill();

    // Bottom-right electron
    ctx.beginPath();
    ctx.arc(213.64, 213.64, 8, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
}

// initialization
window.addEventListener('DOMContentLoaded', () => {
    canvas1 = document.getElementById('canvas1');
    canvas2 = document.getElementById('canvas2');
    canvas3 = document.getElementById('canvas3');
    canvas4 = document.getElementById('canvas4');
    resizeCanvases();

    // Add flip functionality
    document.querySelectorAll('.flip-card').forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });
});

window.addEventListener('resize', resizeCanvases);
