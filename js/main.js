var $carImg = document.getElementById('f1-car');

var car = {
  direction: 'right',
  speed: 0,
  position: {
    x: 0,
    y: 0
  }
};

var stopCar;

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
    if (car.speed === 0) {
      movingCar = setInterval(startCar, 16);
    } else if (car.speed === 1) {
      clearInterval(movingCar);
      car.speed = 0;
    }
  }
}

function startCar() {
  car.speed = 1;

  if (car.direction ==='right') {
    var movingCar = parseInt($carImg.style.left) + 15;
    if (isNaN(movingCar)) {
    movingCar = 15;
  }
  var newValue = movingCar;
  car.position.x = newValue;
  $carImg.style.left = (newValue + 'px');
  } else if (car.direction === 'left') {
    var movingCar = parseInt($carImg.style.right) + 15;
    if (isNaN(movingCar)) {
      movingCar = 15;
    }
    var newValue = movingCar;
    car.position.x = newValue;
    $carImg.style.right = (newValue + 'px');
  } else if (car.direction === 'up') {
    var movingCar = parseInt($carImg.style.bottom) + 15;
    if (isNaN(movingCar)) {
      movingCar = 15;
    }
    var newValue = movingCar;
    car.position.y = newValue;
    $carImg.style.bottom = (newValue + 'px');
  } else if (car.direction === 'down') {
    var movingCar = parseInt($carImg.style.top) + 15;
    if (isNaN(movingCar)) {
      movingCar = 15;
    }
    var newValue = movingCar;
    car.position.y = newValue;
    $carImg.style.top = (newValue + 'px');
  }
}
