let startTime, interval, elapsed = 0;

function updateDisplay() {
  const now = Date.now();
  const time = new Date(now - startTime + elapsed);
  const h = String(time.getUTCHours()).padStart(2, '0');
  const m = String(time.getUTCMinutes()).padStart(2, '0');
  const s = String(time.getUTCSeconds()).padStart(2, '0');
  document.getElementById('display').textContent = `${h}:${m}:${s}`;
}

function start() {
  if (!interval) {
    startTime = Date.now();
    interval = setInterval(updateDisplay, 1000);
  }
}

function stop() {
  if (interval) {
    clearInterval(interval);
    interval = null;
    elapsed += Date.now() - startTime;
  }
}

function reset() {
  clearInterval(interval);
  interval = null;
  elapsed = 0;
  document.getElementById('display').textContent = '00:00:00';
}
