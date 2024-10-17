// Universe class
class Universe {
  constructor() {
    this.sceners = this._getRandomSceners();
  }
  // Get one scener
  getScener() {
    return this.sceners.pop();
  }
  // Create sceners
  _getRandomSceners() {
    sceners = []
    for (let scener_i = 0; scener_i < config.universe.population.sceners; scener_i++) {
      sceners.push(new Scener());
    }
    return sceners;
  }
}
