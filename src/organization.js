// Organization class
class Organization {
	constructor() {
    this.name = this._getRandomName();
  }
}

class Group extends Organization {
	constructor() {
		super();
		console.log(`Group created: ${this.name}`);
	}
	// Get a cool group name
	_getRandomName() {
		const groupStart = words.group.start.random();
		const groupEnd   = words.group.end.random();
		return `${groupStart}${groupEnd}`;
	}
}

// Company class
class Company extends Organization {
	constructor() {
		super();
		this.type     = words.company.type.random();
		this.fullName = this._getFullName();
		console.log(`Company created: ${this.name}`);
	}
	// Get a random company name
	_getRandomName() {
		const companyStart = words.company.start.sample();
		const companyEnd   = words.company.end.sample();
		return `${companyStart}${companyEnd}`;
	}
	// Get full company name
	_getFullName() {
		return `${this.name} ${this.type}`;
	}
}
