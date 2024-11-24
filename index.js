const square = document.querySelector('.menu__gallery-container');
square.classList.remove('menu__gallery-container-transitional');

// Добавить наблюдение за появлением элемента
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      square.classList.add('menu__gallery-container-transitional');
      return;
    }
    square.classList.remove('menu__gallery-container-transitional');
  });
});
observer.observe(document.querySelector('.menu__gallery'));
