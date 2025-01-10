// Competition class
class Competition {
	constructor() {
		this.sponsor     = universe.getCompany();
    this.unofficial  = rand(1, 10) == 1
    this.sponsored   = rand(1, 10) == 1
    this.sponsorText = `sponsored by ${this.sponsor.fullName}`;
    this.plainName   = this._getRandomName();
		this.name        = this.unofficial ? `Unofficial ${this.plainName}` : this.plainName;
    this.sponsorName = this.sponsored  ? `${this.name}${this.sponsorText}` : this.name;
		console.log(`Competition created: ${this.name}`);
	}
	// Generate a competition name
	_getRandomName() {
		const competitionStart = words.competition.start.random();
		const competitionEnd   = words.competition.end.random();
		const competitionType  = words.competition.type.random();
		const competitionWord  = words.competition.word.random();
		let competitionName    = `${competitionStart} ${competitionEnd} ${competitionType} ${competitionWord}`;
    return competitionName;
  }
}
