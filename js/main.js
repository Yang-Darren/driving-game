var $carImg = document.querySelector('.car');


document.addEventListener('keydown', turnCar);

function turnCar(event) {
  if (event.key === 'ArrowRight') {
    $carImg.className = 'car right';
  } else if (event.key === 'ArrowLeft') {
    $carImg.className = 'car left';
  } else if (event.key === 'ArrowUp') {
    $carImg.className = 'car up';
  } else if (event.key === 'ArrowDown') {
    $carImg.className = 'car down';
  }
}
