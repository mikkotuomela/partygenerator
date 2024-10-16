// Person superclass
class Person {
	constructor() {
		this.firstName = words.name.first.random();
		this.lastName  = words.name.last.random();
		this.name      = `${this.firstName} ${this.lastName}`;
    this.title = words.name.title.random();
		console.log(`Person created: ${this.name}`);
	}
}

// Speaker class
class Speaker extends Person {
  constructor() {
    super();
  }
}

// Scener class
class Scener extends Person {
	constructor() {
		super();
		this.handle = this._getRandomHandle();
		this.group  = new Group();
		this.nameWithHandle     = `${this.firstName} "${this.handle}" ${this.lastName}`;
		this.nameWithFullHandle = `${this.firstName} "${this.handle}/${this.group.name}" ${this.lastName}`;
	}
	// Get scene handle
	_getRandomHandle() {
		const handleStart = words.handle.start.random();
		const handleEnd   = words.handle.end.random();
		return `${handleStart}${handleEnd}`;
	}
}
