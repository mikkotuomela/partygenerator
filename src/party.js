// Party class
class Party { 
	// Constructor for Party
	constructor(days) {
		this.days      = days
		this.name      = this.getName();
		this.startDate = new PartyDate(days);
		this.endDate   = new PartyDate(days + 2);
		if (FAKER_AVAILABLE) {
			this.city    = faker.address.city();
			this.country = faker.address.country();
		}
		console.log(`Party created: ${this.name} ${this.year}`);
	}
	// Full party generation
	generate() {
		this.invitation   = new Production(this.days - 60);
		this.mainSponsor  = new Company();
		this.venue        = new Venue();
		this.headOrg      = new Scener();
		this.competitions = this.getCompetitions();
		console.log(`Party generated: ${this.name} ${this.year}`);
	}
	// Generate competitions
	getCompetitions() {
		let competitions = [];
		for (let competition_i = 0; competition_i < config.competitions; competition_i++)
			competitions.push(new Competition());
		return competitions;
	}
	// Get text version of competition list
	getCompetitionsText() {
		let competitionsText = "";
		this.competitions.forEach(competition => {
			competitionsText += `${competition.name}<br />`;
		});
		return competitionsText;
	}
	// Get a random party name
	getName() {
		const partyStart  = words.party.start.sample();
		const partyMiddle = words.party.middle.sample();
		const partyEnd    = words.party.end.sample();
		return `${partyStart} ${partyMiddle} ${partyEnd}`;
	}
}
