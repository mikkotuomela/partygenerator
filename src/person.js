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
  // Get a random age for this person
  _getRandomAgeInDays() {
    return rand(config.universe.person.minAge * 365, config.universe.person.maxAge * 365);
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
    return rand(config.universe.speaker.minAge * 365, config.universe.speaker.maxAge * 365);
  }
}

// Scener class
class Scener extends Person {
	constructor() {
		super();
		this.handle = this._getRandomHandle();
		this.group  = universe.getGroup();
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
    return rand(config.universe.scener.minAge * 365, config.universe.scener.maxAge * 365);
  }
}
