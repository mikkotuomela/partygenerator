// Competition class
class Competition {
	constructor() {
		this.sponsor = universe.getCompany();
		this.name    = this._getRandomName();
		console.log(`Competition created: ${this.name}`);
	}
	// Generate a competition name
	_getRandomName() {
		const competitionStart = words.competition.start.random();
		const competitionEnd   = words.competition.end.random();
		const competitionType  = words.competition.type.random();
		const competitionWord  = words.competition.word.random();
		let competitionName    = `${competitionStart} ${competitionEnd} ${competitionType} ${competitionWord}`;

    // Random modifications
  	if (rand(10, 1) == 1)
			competitionName = `Unofficial ${competitionName}`;
		if (rand(10, 1) == 1)
			competitionName = `${competitionName} sponsored by ${this.sponsor.fullName}`;
    
		return competitionName;
	}
}
