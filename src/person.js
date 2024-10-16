// Person class
class Person {
	constructor() {
		this.firstName = FIRST_NAME.sample();
		this.lastName = LAST_NAME.sample();
		this.name = `${this.firstName} ${this.lastName}`;
		console.log(`Person created: ${this.name}`);
	}
}

// Scener class
class Scener extends Person {
	constructor() {
		super();
		this.handle = this.getHandle();
		this.group = new Group();
		this.nameWithHandle = `${this.firstName} "${this.handle}" ${this.lastName}`;
		this.nameWithFullHandle = `${this.firstName} "${this.handle}/${this.group.name}" ${this.lastName}`;
	}
	// Get scene handle
	getHandle() {
		const handleStart = HANDLE_START.sample();
		const handleEnd = HANDLE_END.sample();
		return handleStart + handleEnd;
	}
}