// ProgramTrack superclass
class ProgramTrack {
  constructor() {
    //this.head = universe.getScener();
  }
}

// Speakers class
class Speakers extends ProgramTrack {
  constructor() {
    super();
    this.speakers = this._getRandomSpeakers();
    this.html     = this._getHtml();
    console.log("Speakers created!");
  }
  // Get random speakers
  _getRandomSpeakers() {
    let speakers = [];
    for (let speaker_i = 0; speaker_i < config.universe.speaker.population; speaker_i++)
      speakers.push(universe.getSpeaker());
    return speakers;
  }
  // Get html version of competition list
	_getHtml() {
		let speakersText = '';
		this.speakers.forEach(speaker => {
			speakersText += `<span class="speaker">${speaker.title} ${speaker.name}</span> (${speaker.job}, ${speaker.org.name})<br />`;
		});
		return speakersText;
	}
}

class Competitions extends ProgramTrack {
  constructor() {
    super();
    this.competitions = this._getRandomCompetitions();
    this.html         = this._getHtml();
    console.log("Competitions created!");
  }
  // Generate competitions
	_getRandomCompetitions() {
		let competitions = [];
		for (let competition_i = 0; competition_i < config.competitions; competition_i++)
			competitions.push(new Competition());
		return competitions;
	}
	// Get html version of competition list
	_getHtml() {
		let competitionsText = '';
		this.competitions.forEach(competition => {
      const sponsorText = competition.sponsored ? competition.sponsorText : '';
			competitionsText += `<span class="competition">${competition.name}</span> ${sponsorText}<br />`;
		});
		return competitionsText;
	}
}
