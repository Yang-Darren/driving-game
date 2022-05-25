var $carImg = document.getElementById('f1-car');
var $yellowCar = document.getElementById('yellow-car')

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
document.addEventListener('click', selectCar);

function turnCar(event) {
  if (event.key === 'ArrowRight') {
    car.direction = 'right';
    $carImg.className = 'car right';
    $yellowCar.className = 'car right'
  } else if (event.key === 'ArrowLeft') {
    car.direction = 'left';
    $carImg.className = 'car left';
    $yellowCar.className = 'car left';
  } else if (event.key === 'ArrowUp') {
    car.direction = 'up';
    $carImg.className = 'car up';
    $yellowCar.className = 'car up';
  } else if (event.key === 'ArrowDown') {
    car.direction = 'down';
    $carImg.className = 'car down';
    $yellowCar.className = 'car down';
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
    var movingCar = parseInt($carImg.style.left) - 15;
    if (isNaN(movingCar)) {
      movingCar = 15;
    }
    var newValue = movingCar;
    car.position.x = newValue;
    $carImg.style.left = (newValue + 'px');
  } else if (car.direction === 'up') {
    var movingCar = parseInt($carImg.style.top) - 15;
    if (isNaN(movingCar)) {
      movingCar = 15;
    }
    var newValue = movingCar;
    car.position.y = newValue;
    $carImg.style.top = (newValue + 'px');
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

function selectCar(event) {
  if (event.target.matches('#f1-car')) {
    $yellowCar.classList.add('hidden');
  } else if (event.target.matches('#yellow-car')) {
    $carImg.classList.add('hidden');
  }
}
