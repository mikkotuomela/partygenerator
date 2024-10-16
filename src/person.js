// Person class
class Person {
	constructor() {
		this.firstName = words.name.first.sample();
		this.lastName  = words.name.last.sample();
		this.name      = `${this.firstName} ${this.lastName}`;
		console.log(`Person created: ${this.name}`);
	}
}

// Scener class
class Scener extends Person {
	constructor() {
		super();
		this.handle = this.getHandle();
		this.group  = new Group();
		this.nameWithHandle     = `${this.firstName} "${this.handle}" ${this.lastName}`;
		this.nameWithFullHandle = `${this.firstName} "${this.handle}/${this.group.name}" ${this.lastName}`;
	}
	// Get scene handle
	getHandle() {
		const handleStart = words.handle.start.sample();
		const handleEnd   = words.handle.end.sample();
		return `${handleStart}${handleEnd}`;
	}
}
