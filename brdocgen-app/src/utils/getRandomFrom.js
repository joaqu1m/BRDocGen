function rng(to, from = 0) {
  return Math.floor(Math.random() * to);
}

export default function getRandomFrom(array) {
  return array[rng(array.length)];
}
