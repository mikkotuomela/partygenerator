// Competition class
class Competition {
	constructor() {
		this.sponsor = new Company();
		this.name = this.getName();
		console.log(`Competition created: ${this.name}`);
	}
	// Generate a competition name
	getName() {
		const competitionStart = COMPETITION_START.sample();
		const competitionEnd = COMPETITION_END.sample();
		const competitionType = COMPETITION_TYPE.sample();
		const competitionWord = COMPETITION_WORD.sample();
		let competitionName = `${competitionStart} ${competitionEnd} ${competitionType} ${competitionWord}`;
		if (rand(10, 1) == 1) {
			competitionName = `Unofficial ${competitionName}`;
		}
		if (rand(10, 1) == 1) {
			competitionName = `${competitionName} sponsored by ${this.sponsor.fullName}`;
		}
		return competitionName;
	}
}