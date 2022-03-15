'use strict';
document.addEventListener('DOMContentLoaded', function () {
  const navigation = document.querySelector('.navigation');
  // Header : show subMenu
  const mainMenuLi = document.querySelectorAll('.menu--main');
  mainMenuLi.forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('showSubMenu');
    });
    btn.addEventListener('mouseenter', () => {
      btn.classList.add('showSubMenu');
    });
    navigation.addEventListener('mouseleave', () => {
      btn.classList.remove('showSubMenu');
    });
  });

  // Header : Toggle menu
  const toggleBtn = document.querySelector('.toggleMenu');
  toggleBtn.addEventListener('click', () => {
    navigation.classList.toggle('openMenu');
  });

  document.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      navigation.classList.remove('openMenu');
    }
  });


  // portfolio gallery lightbox event
  const img = document.querySelectorAll('.modal-img');
  const lightbox = document.querySelector('#gallery-overlay');
  const lightboxImg = lightbox.querySelector('#lightbox-image');

  for (let i = 0; i < img.length; i++) {
    img[i].addEventListener('click', () => {
      const imgNewSrc = img[i].getAttribute('data-lightbox');

      lightboxImg.setAttribute('src', imgNewSrc);
      lightbox.classList.add('visible');
    });
  }

  lightbox.addEventListener('click', () => {
    lightbox.classList.remove('visible');
  });

});