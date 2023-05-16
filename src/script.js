const element = document.querySelector('h4');

const coolAnimations = ['cool-animation-1', 'cool-animation-2'];
const colorAnimations = ['color-animation-1', 'color-animation-2'];

const randomCoolAnimation = coolAnimations[Math.floor(Math.random() * coolAnimations.length)];
const randomColorAnimation = colorAnimations[Math.floor(Math.random() * colorAnimations.length)];

element.classList.add(randomCoolAnimation, randomColorAnimation);

// Remove the applied animations after a specified time
const animationDuration = 3000; // time in milliseconds
setTimeout(() => {
  element.classList.remove(randomCoolAnimation, randomColorAnimation);
}, animationDuration);
