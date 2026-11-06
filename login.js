/* Placeholder login: never grants access, never sends data anywhere. */
(function () {
  var form = document.getElementById('login-form');
  var msg = document.getElementById('login-msg');
  if (!form) return;

  var replies = [
    'The doors remain sealed. Kintklubben opens soon, gentlemen.',
    'Access denied. The butler does not recognise you.',
    'Patience. The Council has not yet forged the keys.',
    'Nice try. Kintklubben is still under construction.'
  ];
  var n = 0;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.secret.value = '';
    msg.textContent = replies[n++ % replies.length];
    form.classList.remove('is-denied');
    void form.offsetWidth; // restart shake animation
    form.classList.add('is-denied');
  });
})();
