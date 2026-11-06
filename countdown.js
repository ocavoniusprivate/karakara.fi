/* Karakara countdown: reads an ISO-8601 datetime from [data-countdown]. */
(function () {
  var root = document.querySelector('[data-countdown]');
  if (!root) return;

  var target = Date.parse(root.getAttribute('data-countdown'));
  var el = {
    days: root.querySelector('[data-unit="days"]'),
    hours: root.querySelector('[data-unit="hours"]'),
    minutes: root.querySelector('[data-unit="minutes"]'),
    seconds: root.querySelector('[data-unit="seconds"]')
  };
  if (isNaN(target)) return;

  function pad(n) { return n < 10 ? '0' + n : String(n); }

  function tick() {
    var diff = target - Date.now();
    if (diff <= 0) {
      root.classList.add('is-live');
      clearInterval(timer);
      return;
    }
    var s = Math.floor(diff / 1000);
    el.days.textContent = Math.floor(s / 86400);
    el.hours.textContent = pad(Math.floor((s % 86400) / 3600));
    el.minutes.textContent = pad(Math.floor((s % 3600) / 60));
    el.seconds.textContent = pad(s % 60);
  }

  var timer = setInterval(tick, 1000);
  tick();
})();
