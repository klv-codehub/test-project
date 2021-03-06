import bodyScrollLock from 'body-scroll-lock';
// import Glide from '@glidejs/glide';
import PerfectScrollbar from 'perfect-scrollbar';

const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;

const BodyScrollOptions = {
  reserveScrollBarGap: true,
};

const modal = document.querySelector('.modal');
const targetElement = document.querySelector('.modal__content');
const modalImg = document.querySelector('.modal__img');
const modalTitle = document.querySelector('.modal__title');
const modalTextBlocks = document.querySelectorAll('.modal__text-block');
const modalValueTitle = document.querySelector('.modal__value-title');
const modalValueItems = document.querySelectorAll('.value-list__item');
const modalAdd = document.querySelector('.modal__add-block');
const modalAddLeft = document.querySelector('.modal__add-left');
const modalIcon = document.querySelector('.modal__close');
const triggers = document.querySelectorAll('.modal-trigger');

function toggleModal() {
  modal.classList.toggle('is-active');

  setTimeout(() => {
    modalImg.classList.toggle('is-active');
  }, 200);
  setTimeout(() => {
    modalTitle.classList.toggle('is-active');
  }, 200);

  setTimeout(() => {
    modalIcon.classList.toggle('is-active');
  }, 400);

  setTimeout(() => {
    modalTextBlocks[0].classList.toggle('is-active');
  }, 400);
  setTimeout(() => {
    modalTextBlocks[1].classList.toggle('is-active');
  }, 600);
  setTimeout(() => {
    modalValueTitle.classList.toggle('is-active');
  }, 800);
  
  modalValueItems.forEach((el, i) => {
    setTimeout(() => {
      el.classList.toggle('is-active');
    }, 800 + i * 100);
  });

  setTimeout(() => {
    modalAdd.classList.toggle('is-active');
  }, 600);

  setTimeout(() => {
    modalAddLeft.classList.toggle('is-active');
  }, 800);

  if (modal.classList.contains('is-active')) {
    disableBodyScroll(targetElement, BodyScrollOptions);
  } else {
    enableBodyScroll(targetElement, BodyScrollOptions);
  }
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
  // console.log(ps.reach.x); // => 'start' or 'end' or null
  // console.log(ps.reach.y);
}

triggers.forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    toggleModal();
  });
});

if (window.innerWidth > 450) {
  window.addEventListener('click', windowOnClick);
} else {
  window.addEventListener('touchend', windowOnClick);
}

// new Glide('.glide', {
//   perView: 10,
// }).mount();

const container = document.querySelector('.tag-list');
new PerfectScrollbar(container, {
  suppressScrollY: true,
  wheelPropagation: true,
});

// var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
const iOS = navigator.userAgent.match(/(iPad|iPhone|iPod)/g);

if (iOS) {
  window.addEventListener('touchend', windowOnClickList);
  const modalListContainer = document.querySelector('.modal-list__content');
  new PerfectScrollbar(modalListContainer, {
    swipeEasing: false,
  });
  const modalContainer = document.querySelector('.modal__right');
  new PerfectScrollbar(modalContainer);
} 


// window.onresize = function() {
//   document.querySelector('.modal__content').height = window.innerHeight;
// }
// window.onresize();

document.querySelectorAll('.tag-list__link').forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
  });
});

const modalList = document.querySelector('.modal-list');
const targetElementList = document.querySelector('.modal-list__box');
const triggersList = document.querySelectorAll('.modal-list-trigger');

function toggleModalList() {
  modalList.classList.toggle('is-active');
  if (modalList.classList.contains('is-active')) {
    disableBodyScroll(targetElementList);
  } else {
    enableBodyScroll(targetElementList);
  }
}

function windowOnClickList(event) {
  if (event.target === modalList) {
    toggleModalList();
  }
}

triggersList.forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    toggleModalList();
  });
});

if (window.innerWidth > 450) {
  window.addEventListener('click', windowOnClickList);
} else {
  window.addEventListener('touchend', windowOnClickList);
}




