// Person superclass
class Person {
	constructor() {
		this.firstName = words.name.first.random();
		this.lastName  = words.name.last.random();
		this.name      = `${this.firstName} ${this.lastName}`;
    this.title     = words.name.title.random();
    this.ageInDays = this._getRandomAgeInDays();
    this.birthday  = this._getBirthday();
		console.log(`Person created: ${this.name}`);
	}
  // Get birthday for this person
  _getBirthday() {
    const birthday = new Date();
    birthday.setDate(birthday.getDate() - this.ageInDays);
    return birthday;
  }
}

// Speaker class
class Speaker extends Person {
  constructor() {
    super();
  }
  _getRandomAgeInDays() {
    return rand(config.universe.age.speakers.min * 365, config.universe.age.speakers.max * 365);
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
  // Get random age in days
  _getRandomAgeInDays() {
    return rand(config.universe.age.sceners.min * 365, config.universe.age.sceners.max * 365);
  }
}
