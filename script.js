const timer = document.getElementById('timer');
const message = document.getElementById('message');
const ringtone = document.getElementById('ringtone');

function updateTimer() {
    const now = new Date();
    const targetDate = new Date('2025-01-01T00:00:00');
    const diff = targetDate - now;

    if (diff <= 0) {
        timer.style.display = 'none';
        message.textContent = 'З Новим Роком!';
        ringtone.play();
        clearInterval(interval);
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = `${days} Днів`;
    document.getElementById('hours').textContent = `${hours} Годин`;
    document.getElementById('minutes').textContent = `${minutes} Хвилин`;
    document.getElementById('seconds').textContent = `${seconds} Секунд`;
}

const interval = setInterval(updateTimer, 1000);
updateTimer();
