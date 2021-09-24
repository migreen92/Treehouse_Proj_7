// -------- ALERT BANNER -------- //
const alertBanner = document.getElementById('alert');

alertBanner.innerHTML =
  `
    <div class="alert">
      <p>ALERT: You have <strong>3</strong> new notifications.</p>
      <p class="alert-close">x</p>
    </div>
  `

alertBanner.addEventListener('click', e => {
  const element = e.target;
  if (element.classList.contains('alert-close')) {
    alertBanner.style.display = 'none'
  }
});
