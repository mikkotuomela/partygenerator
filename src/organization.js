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
		const groupStart = GROUP_START.sample();
		const groupEnd = GROUP_END.sample();
		return groupStart + groupEnd;
	}
}

// Company class
class Company extends Organization {
	constructor() {
		super();
		this.name = this.getName();
		this.type = this.getType();
		this.fullName = this.getFullName();
		console.log(`Company created: ${this.name}`);
	}
	// Get a random company name
	getName() {
		const companyStart = COMPANY_START.sample();
		const companyEnd = COMPANY_END.sample();
		return `${companyStart}${companyEnd}`;
	}
	// Get a random company type
	getType() {
		return COMPANY_TYPE.sample();
	}
	// Get full company name
	getFullName() {
		return `${this.name} ${this.type}`;
	}
}
