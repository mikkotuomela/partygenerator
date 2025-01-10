// Organization class
class Organization {
  constructor() {
    this.name = this._getRandomName();
  }
}

// Group class
class Group extends Organization {
	constructor() {
		super();
		//console.log(`Group created: ${this.name}`);
	}
	// Get a cool random group name
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
    this.name     = this.fullName;
		//console.log(`Company created: ${this.name}`);
	}
	// Get a random company name, randomly add a space between two parts of the name
	_getRandomName() {
		const companyStart = words.company.start.random();
		const companyEnd   = words.company.end.random();
    const space = rand(0, 1) == 1 ? ' ' : '';
		return `${companyStart}${space}${companyEnd}`;
	}
	// Get full company name
	_getFullName() {
		return `${this.name} ${this.type}`;
	}
}

// Association class
class Association extends Organization {
	constructor() {
		super();
		//console.log(`Association created: ${this.name}`);
	}
	// Get a  random association name
	_getRandomName() {
		return "Association";
	}
}

// Foundation class
class Foundation extends Organization {
	constructor() {
		super();
		//console.log(`Foundation created: ${this.name}`);
	}
	// Get a random foundation name
	_getRandomName() {
		const foundationStart = words.foundation.start.random();
		const foundationEnd   = words.foundation.end.random();
		const foundation = `${foundationStart} ${foundationEnd}`;
    return rand(0, 1) == 0 ? `Foundation for ${foundation}` : `${foundation} Foundation`;
	}
}