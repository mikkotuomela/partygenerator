// Organization class
class Organization {
	constructor() {}
}

class Group extends Organization {
	constructor() {
		super();
		this.name = this.getName();
		console.log(`Group created: ${this.name}`);
	}
	// Get a cool group name
	getName() {
		const groupStart = words.group.start.sample();
		const groupEnd = words.group.end.sample();
		return `${groupStart}${groupEnd}`;
	}
}

// Company class
class Company extends Organization {
	constructor() {
		super();
		this.name = this.getName();
		this.type = words.company.type.sample();
		this.fullName = this.getFullName();
		console.log(`Company created: ${this.name}`);
	}
	// Get a random company name
	getName() {
		const companyStart = words.company.start.sample();
		const companyEnd = words.company.end.sample();
		return `${companyStart}${companyEnd}`;
	}
	// Get full company name
	getFullName() {
		return `${this.name} ${this.type}`;
	}
}
