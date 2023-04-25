function fizzBuzzleSpoutnik(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(getFizzBuzzleSpoutnik(i));
  }
}

export function getFizzBuzzleSpoutnik(x: number): String {
  let fizz = '';
  let buzzle = '';
  let spoutnik = '';

  if (x % 3 === 0) {
    fizz = 'Fizz';
  }
  if (x % 4 === 0) {
    spoutnik = 'Spoutnik';
  }
  if (x % 5 === 0) {
    buzzle = 'Buzzle';
  }
  let val = fizz + buzzle + spoutnik;
  if (val === '') {
    val = `${x}`;
  }
  return val;
}
