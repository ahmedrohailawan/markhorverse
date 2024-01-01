const navMobileBtn = document.querySelector('.nav-mobile-btn');
const nav = document.querySelector('.nav');
const btnIcon = navMobileBtn.querySelector('span i');

navMobileBtn.addEventListener('click', () => {
  nav.classList.toggle('nav_active');
  btnIcon.classList.toggle('btn_active');
});

function navclose() {
  nav.classList.remove('nav_active');
  btnIcon.classList.remove('btn_active');
}


