// Toggle page

function togglePage(currentPage) {
  
  const homePage = document.getElementById('home-page');
  const pages = document.querySelectorAll('.page');

  pages.forEach(page => {
    
    if (page.id === currentPage) {
      page.style.display = 'block';
      setTimeout(() => {
        page.style.opacity = '1';
      }, 50);
    } else {
      page.style.opacity = '0';
      setTimeout(() => {
        page.style.display = 'none';
      }, 0);
    }
  });
}

//Canvas

/** @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const trailLength = 90;
const trail = [];

class Square {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 10 + 20;
    this.color = `hsl(${Math.random() * 360}, 100%, 80%)`;
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
  }
}

function drawTrail() {
  for (let i = 0; i < trail.length; i++) {
    const transparency = (i + 1) / trailLength;
    ctx.globalAlpha = transparency;
    trail[i].draw();
  }
}

function updateTrail(x, y) {
  if (trail.length >= trailLength) {
    trail.shift();
  }
  trail.push(new Square(x, y));
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawTrail();
  requestAnimationFrame(animate);
}

window.addEventListener('mousemove', function(e) {
  updateTrail(e.x, e.y);
});

animate();
