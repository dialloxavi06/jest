import { getFizzBuzzleSpoutnik } from '../../metier/ex2/FizzBuzzleSpoutnik';

test('pas de modif', () => {
  expect(getFizzBuzzleSpoutnik(2)).toBe('2');
});

test('3', () => {
  expect(getFizzBuzzleSpoutnik(3)).toBe('Fizz');
});

test('multiple de 3', () => {
  expect(getFizzBuzzleSpoutnik(6)).toBe('Fizz');
});

test('5', () => {
  expect(getFizzBuzzleSpoutnik(5)).toBe('Buzzle');
});

test('multiple de 5', () => {
  expect(getFizzBuzzleSpoutnik(10)).toBe('Buzzle');
});

test('multiple de 3 et 5', () => {
  expect(getFizzBuzzleSpoutnik(15)).toBe('FizzBuzzle');
});

test('4', () => {
  expect(getFizzBuzzleSpoutnik(4)).toBe('Spoutnik');
});

test('multiple de 4', () => {
  expect(getFizzBuzzleSpoutnik(8)).toBe('Spoutnik');
});

test('multiple de 3 et 4', () => {
  expect(getFizzBuzzleSpoutnik(12)).toBe('FizzSpoutnik');
});

test('multiple de 5 et 4', () => {
  expect(getFizzBuzzleSpoutnik(20)).toBe('BuzzleSpoutnik');
});

test('multiple de 5 et 4 et 3', () => {
  expect(getFizzBuzzleSpoutnik(60)).toBe('FizzBuzzleSpoutnik');
});
