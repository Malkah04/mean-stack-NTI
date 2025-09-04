import Shape from "./shape";

export default class Rectangle extends Shape {
  Rdim: number;
  constructor(Rdim: number, dim: number) {
    super(dim);
    this.Rdim = Rdim;
  }
  area(): number {
    return 2 * this.Rdim;
  }
}
