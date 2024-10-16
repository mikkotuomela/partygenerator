// Venue class
class Venue {
	constructor() {
		this.name     = this.getRandomName();
		this.capacity = Math.floor(2 ** (Math.random() * 11)) * 10;
		console.log(`Venue created: ${this.name}`);
	}
	// Get a random venue name
	getRandomName() {
		const company = new Company();
		return `${company.name} ${words.venue.end.sample()}`;
	}
}
