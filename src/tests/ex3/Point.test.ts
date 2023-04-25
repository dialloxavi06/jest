import { Point } from '../../metier/ex3/Point';

test('constructeur par défaut', () => {
  const p = new Point();
  expect(p.abs).toBe(0);
  expect(p.ord).toBe(0);
});

test('constructeur 1 paramètre', () => {
  const p = new Point(10);
  expect(p.abs).toBe(10);
  expect(p.ord).toBe(0);
});

test('constructeur 2 paramètres', () => {
  const p = new Point(10, 5);
  expect(p.abs).toBe(10);
  expect(p.ord).toBe(5);
});

test('set abs', () => {
  const p = new Point();
  p.abs = 10;
  expect(p.abs).toBe(10);
});

test('set ord', () => {
  const p = new Point();
  p.ord = 10;
  expect(p.ord).toBe(10);
});

test('toString', () => {
  const p = new Point(1, 5);
  expect(p.toString()).toBe('(1, 5)');
});

test('déplace', () => {
  const p = new Point(10, 10);
  p.déplace(5, 15);
  //expect(p.abs).toBe(15);
  //expect(p.ord).toBe(25);
  expect(p).toStrictEqual(new Point(15, 25));
});

test('somme', () => {
  const p = new Point(12, 5);
  const p2 = new Point(2, 25);
  const resultat = p.somme(p2);
  expect(resultat.abs).toBe(14);
  expect(resultat.ord).toBe(30);
});

test('égal avec deux points égaux', () => {
  const p = new Point(12, 5);
  const p2 = new Point(12, 5);
  expect(p.egal(p2)).toBe(true);
});

test('égal avec deux points différents', () => {
  const p = new Point(2, 25);
  const p2 = new Point(12, 5);
  expect(p.egal(p2)).toBe(false);
});

test('égal static avec deux points égaux', () => {
  const p = new Point(12, 5);
  const p2 = new Point(12, 5);
  expect(Point.egal_static(p, p2)).toBe(true);
});

test('égal avec deux points différents', () => {
  const p = new Point(2, 25);
  const p2 = new Point(12, 5);
  expect(Point.egal_static(p, p2)).toBe(false);
});
