export class DTSBuilder {
  constructor(current, resolvers) {
    this.current = current;
    this.result = '';
    this.resolvers = resolvers;
  }

  next(strategy) {
    this.result += strategy(this.current, this.resolvers);
    return this;
  }

  getResult() {
    return this.result;
  }
}
