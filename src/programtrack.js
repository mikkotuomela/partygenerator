// ProgramTrack superclass
class ProgramTrack {
  constructor() {
    this.head = new Scener();
  }
}

class Speakers extends ProgramTrack {
  constructor() {
    super();
    this.speakers = _getRandomSpeakers();
  }
  // Get random speakers
  _getRandomSpeakers() {
    let speakers = [];
    for (let speaker_i = 0; speaker_i < config.speakers; speaker_i++)
      speakers.push(new Speaker());
  }
}

class Competitions extends ProgramTrack {
  constructor() {
    super();
    this.competitions = _getRandomCompetitions();
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
