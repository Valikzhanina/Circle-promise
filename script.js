const start = document.createElement('button');
start.textContent = 'start';

start.addEventListener('click', () => {
  makeCircle(300, 'green', 'circle', 1000).then(() => {
    start.remove();
  });
});

document.body.append(start);

function changeBG(elem, newBG, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      elem.style.backgroundColor = newBG;
      resolve(elem);
    }, delay);
  });
}

function makeCircle(d, color, classes, time) {
  const circle = document.createElement('div');
  const newColor = document.createElement('input');
  const newTime = document.createElement('input');
  const button = document.createElement('button');

  circle.style.width = `${d}px`;
  circle.style.height = `${d}px`;
  circle.style.backgroundColor = color;
  circle.style.borderRadius = '200px';
  circle.className = classes;

  newColor.type = 'color';
  newTime.type = 'number';
  button.textContent = 'OK';

  button.addEventListener('click', () => {
    changeBG(circle, newColor.value, newTime.value);
  });
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.prepend(circle, newColor, newTime, button);
      resolve({ circle, newColor, newTime });
    }, time);
  });
}
