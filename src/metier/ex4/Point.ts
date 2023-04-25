export class Point {
  private _abs = 0;
  private _ord = 0;

  constructor(abs = 0, ord = 0) {
    this.abs = abs;
    this.ord = ord;
  }

  get abs(): number {
    return this._abs;
  }
  
  set abs(valeur) {
    if (valeur < 0) {
      throw new Error('Les coordonnées du point doivent être positives.');
    }
    this._abs = valeur;
  }

  get ord(): number {
    return this._ord;
  }
  
  set ord(valeur) {
    if (valeur < 0) {
      throw new Error('Les coordonnées du point doivent être positives.');
    }
    this._ord = valeur;
  }

  toString(): string {
    return '(' + this._abs + ', ' + this._ord + ')';
  }

  déplace(dabs: number, dord: number): void {
    if (this._abs + dabs < 0 || this._ord + dord < 0) {
      throw new Error(
        'Le déplacement du point crée un point à coordonnées négatives.'
      );
    }

    this._abs += dabs;
    this._ord += dord;
  }

  somme(p: Point): Point {
    return new Point(this._abs + p._abs, this._ord + p._ord);
  }

  static egal_static(p1: Point, p2: Point): boolean {
    return p1.egal(p2);
  }

  egal(p: Point): boolean {
    return this._abs === p._abs && this._ord === p._ord;
  }
}
