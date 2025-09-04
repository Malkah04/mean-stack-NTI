import Shape from "./shape";

export default class Circle extends Shape {
  Rdim: number;
  constructor(Rdim: number, dim: number) {
    super(dim);
    this.Rdim = Rdim;
  }
  area(): number {
    return 3.14 * this.Rdim * this.Rdim;
  }
}
