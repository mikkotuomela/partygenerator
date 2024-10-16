// Venue class
class Venue {
	constructor() {
		this.name = this.getName();
		this.capacity = Math.floor(2 ** (Math.random() * 11)) * 10;
		//this.capacity = rand(1, 200) * 50;
		console.log(`Venue created: ${this.name}`);
	}
	// Get a random venue name
	getName() {
		const company = new Company();
		return `${company.name} ${VENUE_END.sample()}`;
	}
}