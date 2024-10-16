// Party class
class Party { 
	// Constructor for Party
	constructor(days) {
		this.days      = days
		this.name      = this._getRandomName();
		this.startDate = new PartyDate(days);
		this.endDate   = new PartyDate(days + 2);
		if (config.fakerAvailable) {
			this.city    = faker.address.city();
			this.country = faker.address.country();
		}
		console.log(`Party created: ${this.name} ${this.year}`);
	}
	// Full party generation
	generate() {
		this.invitation   = new Invitation();
    this.invParty     = new this.constructor(days - 30);
		this.mainSponsor  = new Company();
		this.venue        = new Venue();
		this.headOrg      = new Scener();
    this.program      = new Program();
		console.log(`Party generated: ${this.name} ${this.year}`);
  }
	// Get a random party name
	_getRandomName() {
		const partyStart  = words.party.start.random();
		const partyMiddle = words.party.middle.random();
		const partyEnd    = words.party.end.random();
		return `${partyStart} ${partyMiddle} ${partyEnd}`;
	}
}
