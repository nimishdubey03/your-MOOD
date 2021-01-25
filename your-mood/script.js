'use strict';

document.querySelector('.show').addEventListener('click', function () {
  document.querySelector('.box').classList.remove('hidden');
  const dice = Math.trunc(Math.random() * 11);
  const arr = [
    'Happy😀',
    'Sad😥',
    'Angry😡',
    'Sleepy😪',
    'Bore🥱',
    'Kindness🤗',
    'Fear😱',
    'Disgust😞',
    'Weeping😩',
    'Hoping🤞',
    'Blessed🙌',
  ];
  document.querySelector('.box').textContent = arr[dice];
});
document.querySelector('.hide').addEventListener('click', function () {
  document.querySelector('.box').classList.add('hidden');
});
