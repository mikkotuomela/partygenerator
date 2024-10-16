// Venue class
class Venue {
	constructor() {
		this.name     = this._getRandomName();
		this.capacity = Math.floor(2 ** (Math.random() * 11)) * 10;
		console.log(`Venue created: ${this.name}`);
	}
	// Get a random venue name
	_getRandomName() {
		const company = new Company();
		return `${company.name} ${words.venue.end.random()}`;
	}
}
