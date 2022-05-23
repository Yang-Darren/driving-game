var $carImg = document.getElementById('f1-car');

var car = {
  direction: 'right',
  position: {
    x: 0,
    y: 0
  }
};

document.addEventListener('keydown', turnCar);

function turnCar(event) {
  if (event.key === 'ArrowRight') {
    car.direction = 'right';
    $carImg.className = 'car right';
  } else if (event.key === 'ArrowLeft') {
    car.direction = 'left';
    $carImg.className = 'car left';
  } else if (event.key === 'ArrowUp') {
    car.direction = 'up';
    $carImg.className = 'car up';
  } else if (event.key === 'ArrowDown') {
    car.direction = 'down';
    $carImg.className = 'car down';
  }
  if (event.key === ' ') {
    setInterval(moveCar, 16);
  }
}

function moveCar() {
  $carImg.style.left= 10 + 'px';
}
