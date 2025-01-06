// Party class
class Party { 
	constructor(days) {
		this.days      = days
		this.name      = this._getRandomName();
		this.startDate = new PartyDate(days);
		this.endDate   = new PartyDate(days + 2);
    this.year      = this.startDate.year;
		if (config.fakerAvailable) {
			this.city    = faker.address.city();
			this.country = faker.address.country();
		}
	  console.log(`Party created: ${this.name} ${this.year}`);
	}
	// Full party generation
	generate() {
		this.invitation   = new Invitation();
    this.invParty     = new this.constructor(this.days - 30);
	  this.mainSponsor  = universe.getCompany();
		this.venue        = new Venue();
		this.headOrg      = universe.getScener();
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
