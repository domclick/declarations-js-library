export class Runner {
  constructor() {
    this.steps = [];
  }

  step(step) {
    this.steps.push(step);
    return this;
  }

  end() {
    this.steps.reduce((acc, step) => step(acc), '');
  }
}
