// Person superclass
class Person {
	constructor() {
		this.firstName = words.name.first.random();
		this.lastName  = words.name.last.random();
		this.name      = `${this.firstName} ${this.lastName}`;
    this.title     = words.name.title.random();
    this.job       = words.name.job.random();
    this.ageInDays = this._getRandomAgeInDays();
    this.birthday  = this._getBirthday();
		//console.log(`Person created: ${this.name}`);
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
    this.org = this._getRandomOrg();
  }
  _getRandomAgeInDays() {
    return rand(config.universe.speaker.minAge * 365, config.universe.speaker.maxAge * 365);
  }
  // Get a random organization (three options)
  _getRandomOrg() {
    const orgType = rand(1, 3);
    if (orgType == 1)
      return new Company();
    else if (orgType == 2)
      return new Association();
    else
      return new Foundation();
  }
}

// Gamer class
class Gamer extends Person {
  constructor() {
    super();
  }
  _getRandomAgeInDays() {
    return rand(config.universe.gamer.minAge * 365, config.universe.gamer.maxAge * 365);
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
    this.fullHandle         = `${this.handle} / ${this.group.name}`;
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
