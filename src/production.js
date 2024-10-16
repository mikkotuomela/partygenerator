// Production class
class Production {
	constructor() {
    this.name = this._getRandomName();
    console.log(`Production created: ${this.name}`);
	}
  // Get random production name
  _getRandomName() {
    return 'randomName';
  }
}

class Invitation extends Production {
  constructor() {
    super();
  }
  _getRandomName() {
    return 'introName';
  }
}
