'use strict';

const joke1 = document.querySelector('.qOne');
const answer1 = document.querySelector('.aOne');

const joke2 = document.querySelector('.qTwo');
const answer2 = document.querySelector('.aTwo');

const joke3 = document.querySelector('.qThree');
const answer3 = document.querySelector('.aThree');

const joke4 = document.querySelector('.qFour');
const answer4 = document.querySelector('.aFour');

const joke5 = document.querySelector('.qFive');
const answer5 = document.querySelector('.aFive');

const joke6 = document.querySelector('.qSix');
const answer6 = document.querySelector('.aSix');

const joke7 = document.querySelector('.qSeven');
const answer7 = document.querySelector('.aSeven');

const joke8 = document.querySelector('.qEight');
const answer8 = document.querySelector('.aEight');

const joke9 = document.querySelector('.qNine');
const answer9 = document.querySelector('.aNine');

const joke10 = document.querySelector('.qTen');
const answer10 = document.querySelector('.aTen');

const joke11 = document.querySelector('.qEleven');
const answer11 = document.querySelector('.aEleven');

const overlay = document.querySelector('.overlay');

document.querySelector('.qOne').addEventListener('click', function () {
  overlay.classList.remove('hidden');
  answer1.classList.remove('hidden');
});

document.querySelector('.aOne').addEventListener('click', function () {
  overlay.classList.add('hidden');
  answer1.classList.add('hidden');
});

document.querySelector('.qTwo').addEventListener('click', function () {
  overlay.classList.remove('hidden');
  answer2.classList.remove('hidden');
});

document.querySelector('.aTwo').addEventListener('click', function () {
  overlay.classList.add('hidden');
  answer2.classList.add('hidden');
});

document.querySelector('.qThree').addEventListener('click', function () {
  overlay.classList.remove('hidden');
  answer3.classList.remove('hidden');
});

document.querySelector('.aThree').addEventListener('click', function () {
  overlay.classList.add('hidden');
  answer3.classList.add('hidden');
});

document.querySelector('.qFour').addEventListener('click', function () {
  overlay.classList.remove('hidden');
  answer4.classList.remove('hidden');
});

document.querySelector('.aFour').addEventListener('click', function () {
  overlay.classList.add('hidden');
  answer4.classList.add('hidden');
});

document.querySelector('.qFive').addEventListener('click', function () {
  overlay.classList.remove('hidden');
  answer5.classList.remove('hidden');
});

document.querySelector('.aFive').addEventListener('click', function () {
  overlay.classList.add('hidden');
  answer5.classList.add('hidden');
});

document.querySelector('.qSix').addEventListener('click', function () {
  overlay.classList.remove('hidden');
  answer6.classList.remove('hidden');
});

document.querySelector('.aSix').addEventListener('click', function () {
  overlay.classList.add('hidden');
  answer6.classList.add('hidden');
});

document.querySelector('.qSeven').addEventListener('click', function () {
  overlay.classList.remove('hidden');
  answer7.classList.remove('hidden');
});

document.querySelector('.aSeven').addEventListener('click', function () {
  overlay.classList.add('hidden');
  answer7.classList.add('hidden');
});

document.querySelector('.qEight').addEventListener('click', function () {
  overlay.classList.remove('hidden');
  answer8.classList.remove('hidden');
});

document.querySelector('.aEight').addEventListener('click', function () {
  overlay.classList.add('hidden');
  answer8.classList.add('hidden');
});

document.querySelector('.qNine').addEventListener('click', function () {
  overlay.classList.remove('hidden');
  answer9.classList.remove('hidden');
});

document.querySelector('.aNine').addEventListener('click', function () {
  overlay.classList.add('hidden');
  answer9.classList.add('hidden');
});

document.querySelector('.qTen').addEventListener('click', function () {
  overlay.classList.remove('hidden');
  answer10.classList.remove('hidden');
});

document.querySelector('.aTen').addEventListener('click', function () {
  overlay.classList.add('hidden');
  answer10.classList.add('hidden');
});

document.querySelector('.qEleven').addEventListener('click', function () {
  overlay.classList.remove('hidden');
  answer11.classList.remove('hidden');
});

document.querySelector('.aEleven').addEventListener('click', function () {
  overlay.classList.add('hidden');
  answer11.classList.add('hidden');
});

// const closeModal = function () {
//     // answer1.classList.add('hidden');
//     answer1.classList.add('hidden');
//     overlay.classList.add('hidden');
//   };

// for (let i = 0; i < btnsOpenModal.length; i++) {
//   btnsOpenModal[i].addEventListener('click', openModal);
//   btnCloseModal.addEventListener('click', closeModal);
//   overlay.addEventListener('click', closeModal);
// }
/*
const openModal = function () {
  overlay.classList.remove('hidden');
  // answer1.classList.remove('hidden');

  // overlay.classList.remove('hidden');
  answer2.classList.remove('hidden');
};

const closeModal = function () {
  // answer1.classList.add('hidden');
  answer2.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
  btnCloseModal.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
}
*/

// original code:

/*
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnsOpenModal);

const openModal = function () {
  // console.log('Button clicked');
  modal.classList.remove('hidden'); //. (dot) only needed for the selector, not for using classes in class list.
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
  btnCloseModal.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
}

document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    //  console.log('Esc was pressed');
    closeModal();
  }
});

*/
