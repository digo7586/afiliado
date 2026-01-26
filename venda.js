// Countdown de 48h para criar urgência
const countdownEl = document.getElementById('countdown');
const start = new Date();
const end = new Date(start.getTime() + 48 * 60 * 60 * 1000); // +48h

function updateCountdown() {
  const now = new Date();
  const totalSeconds = Math.floor((end - now) / 1000);

  if (totalSeconds <= 0) {
    countdownEl.textContent = 'Oferta encerrada';
    return;
  }

  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds / 3600) % 24);
  const minutes = Math.floor((totalSeconds / 60) % 60);
  const seconds = totalSeconds % 60;

  countdownEl.textContent =
    `${days}d ` +
    `${String(hours).padStart(2, '0')}h ` +
    `${String(minutes).padStart(2, '0')}m ` +
    `${String(seconds).padStart(2, '0')}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Scroll suave para âncoras internas
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const targetId = link.getAttribute('href');
    if (targetId && targetId.length > 1) {
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    }
  });
});
