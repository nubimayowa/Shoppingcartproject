export class Circle {
  constructor(radius) {
    _radius.set(this, radius);
    _move.set(this, () => {
      console.log("move", this);
    });
  }

  draw() {
    _move.get(this)();
    console.log("draw");
  }
}
