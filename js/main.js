
function randomInteger(min, max) {
  if (min < 0 || max < 0) {
    return console.log('Значение не может быть ниже 0');
  }
  if (min === max ) {
    return console.log('Значение "от" не может быть равным "до"');
  }
  if (min > max) {
    const rand2 = max + Math.random() * (min + 1 - max);
    return Math.floor(rand2);
  }
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}


console.log(randomInteger(1, 5));


function randomFloat(min, max, float) {
  if (min < 0 || max < 0) {
    return console.log('Значение не может быть ниже 0');
  }
  if (min === max ) {
    return console.log('Значение "от" не может быть равным "до"');
  }
  if (min > max) {
    const rand2 = Math.random() * (min - max) + max;
    return +rand2.toFixed(float);
  }
  const rand = Math.random() * (max - min) + min;
  return +rand.toFixed(float);
}


console.log(randomFloat(5, 1, 3));
