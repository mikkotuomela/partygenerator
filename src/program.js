// Program class
class Program {
  constructor() {
    this.competitions     = _getRandomCompetitions();
	  this.competitionsHtml = _getCompetitionsHtml();
  }
  // Generate competitions
	_getRandomCompetitions() {
		let competitions = [];
		for (let competition_i = 0; competition_i < config.competitions; competition_i++)
			competitions.push(new Competition());
		return competitions;
	}
	// Get text version of competition list
	_getCompetitionsHtml() {
		let competitionsText = '';
		this.competitions.forEach(competition => {
			competitionsText += `${competition.name}<br />`;
		});
		return competitionsText;
	}
}
