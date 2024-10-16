// Competition class
class Competition {
	constructor() {
		this.sponsor = new Company();
		this.name    = this.getRandomName();
		console.log(`Competition created: ${this.name}`);
	}
	// Generate a competition name
	getRandomName() {
		const competitionStart = words.competition.start.sample();
		const competitionEnd   = words.competition.end.sample();
		const competitionType  = words.competition.type.sample();
		const competitionWord  = words.competition.word.sample();
		let competitionName    = `${competitionStart} ${competitionEnd} ${competitionType} ${competitionWord}`;

    // Random modifications
		if (rand(10, 1) == 1)
			competitionName = `Unofficial ${competitionName}`;
		if (rand(10, 1) == 1)
			competitionName = `${competitionName} sponsored by ${this.sponsor.fullName}`;
    
		return competitionName;
	}
}
