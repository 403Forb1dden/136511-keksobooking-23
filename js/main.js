
function randomInteger(min, max) {
  if (min < 0 || max < 0) {
    return;
  }
  if (min === max ) {
    return ;
  }
  if (min > max) {
    const rand2 = max + Math.random() * (min + 1 - max);
    return Math.floor(rand2);
  }
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

randomInteger(1, 5);

function randomFloat(min, max, float) {
  if (min < 0 || max < 0) {
    return;
  }
  if (min === max ) {
    return;
  }
  if (min > max) {
    const rand2 = Math.random() * (min - max) + max;
    return +rand2.toFixed(float);
  }
  const rand = Math.random() * (max - min) + min;
  return +rand.toFixed(float);
}

randomFloat(5, 1, 3);
