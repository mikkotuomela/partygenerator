// Party class
class Party {
	// Constructor for Party
	constructor(days) {
		this.days = days
		this.name = this.getName();
		this.startDate = this.getDate(this.days);
		this.endDate = this.getDate(days + 2);
		this.year = this.startDate.getFullYear();
		this.formattedStartDate = this.getFormattedDate(this.startDate);
		this.formattedEndDate = this.getFormattedDate(this.endDate);
		if (FAKER_AVAILABLE) {
			this.city = faker.address.city();
			this.country = faker.address.country();
		}
		console.log(`Party created: ${this.name} ${this.year}`);
	}
	// Full party generation
	generate() {
		this.invitation = new Production(this.days - 60);
		this.mainSponsor = new Company();
		this.venue = new Venue();
		this.headOrg = new Scener();
		this.complete = true;
		this.competitions = this.getCompetitions();
		console.log(`Party generated: ${this.name} ${this.year}`);
	}
	// Generate competitions
	getCompetitions() {
		let competitions = [];
		for (let competition_i = 0; competition_i < COMPETITIONS; competition_i++)
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
	// Get a date in the future
	getDate(futureDays) {
		let currentDate = new Date();
		let futureDate = new Date(currentDate);
		futureDate.setDate(currentDate.getDate() + futureDays);
		return futureDate;
	}
	// Format a date
	getFormattedDate(date) {
		const options = { year: 'numeric', month: 'long', day: 'numeric' };
		return date.toLocaleDateString(LOCALE, options);
	}
	// Get a random party name
	getName() {
		const partyStart = PARTY_START.sample();
		const partyMiddle = PARTY_MIDDLE.sample();
		const partyEnd = PARTY_END.sample();
		return `${partyStart} ${partyMiddle} ${partyEnd}`;
	}
}