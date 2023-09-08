// Toggle the menu open and close when on mobile
export default function menuOpen() {
  const burgerButton = document.querySelector('.burger-button');
  const burgerElements = document.querySelectorAll('.burger-element');
  const menu = document.querySelector('.gh-head-menu');
  const menuActions = document.querySelector('.gh-head-actions');
  burgerButton.addEventListener('click', function () {
    burgerElements[0].classList.toggle('-translate-y-3');
    burgerElements[0].classList.toggle('rotate-[40deg]');
    burgerElements[1].classList.toggle('opacity-0');
    burgerElements[2].classList.toggle('translate-y-3');
    burgerElements[2].classList.toggle('-rotate-[40deg]');
    menu.classList.toggle('hidden');
    menuActions.classList.toggle('hidden');
    menuActions.classList.toggle('flex');
    menu.classList.toggle('flex');
    menu.classList.toggle('backdrop-blur');
    document.body.classList.toggle('overflow-hidden');
  });
};
