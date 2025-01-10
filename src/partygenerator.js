/*
Partygenerator 1.0 by ravel
Probably doesn't work with IE because of template literals :------D
*/

// Run the whole thing
function run() {

	// Generate the party
	const days  = Math.floor(Math.random() * config.dayRange) + config.minDays;
	const party = new Party(days);
	party.generate();

	// Generate output
	const invParty     = party.invParty;
	const htmlElements = ['venue', 'head', 'sponsor', 'competitions', 'speakers'];
	const output = {
		title:        `${party.name} ${party.year}`,
		date:         `${party.startDate.text} - ${party.endDate.text}`,
		venue:        `Party place: <b>${party.venue.name}</b> (capacity: ${party.venue.capacity} computer places!!!) in ${party.city}, ${party.country}!`,
		head:         `Head organizer: <b>${party.headOrg.nameWithFullHandle}</b>`,
		inv:          `Check out our invitation intro released on ${invParty.startDate.text} at ${invParty.name} ${invParty.year} in ${invParty.city}, ${invParty.country}!`,
		sponsor:      `Main sponsor: <b>${party.mainSponsor.fullName}</b>`,
		competitions: `We have the following competitions:<br />${party.program.competitions.html}`,
		speakers:     `Do not miss our speakers:<br />${party.program.speakers.html}`
	}
	
	// Insert output using jQuery
	Object.keys(output).forEach(key => {
		htmlElements.includes(key)
			? $('#' + key).html(output[key])
			: $('#' + key).text(output[key]);
	})
	
}

$(document).ready(run);
