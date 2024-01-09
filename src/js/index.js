const menuHamburger = document.querySelector('.menu-hamburger');
const mobileActive = document.querySelector('.mobile-active');

let isMobileActiveDisplayed = false;

menuHamburger.addEventListener('click', () => {
  if (!isMobileActiveDisplayed) {
    mobileActive.style.display = 'block';
    mobileActive.style.left = '0';
    mobileActive.style.transition = 'ease-in-out 3s';
    isMobileActiveDisplayed = true;
  } else {
    mobileActive.style.display = 'none';
    mobileActive.style.transition = 'ease-in-out 3s';
    isMobileActiveDisplayed = false;
  }
});
