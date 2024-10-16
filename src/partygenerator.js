/*
Partygenerator 1.0 by ravel
Probably doesn't work with IE because of template literals :------D
*/

// Run the whole thing
function run() {

	// Generate the party
	const days         = Math.floor(Math.random() * config.dayRange) + config.minDays;
	const party        = new Party(days);
	party.generate();

	// Generate output
	const invParty     = party.invitation.party;
	const htmlElements = ["competitions"];
	const output = {
		title:        `${party.name} ${party.year}`,
		date:         `From ${party.startDate.text} to ${party.endDate.text}`,
		venue:        `Party place: ${party.venue.name} (capacity: ${party.venue.capacity} computer places!!!) in ${party.city}, ${party.country}!`,
		head:         `Head organizer: ${party.headOrg.nameWithFullHandle}`,
		inv:          `Check out our invitation intro released on ${invParty.startDate.text} at ${invParty.name} ${invParty.year} in ${invParty.city}, ${invParty.country}!`,
		sponsor:      `Main sponsor: ${party.mainSponsor.fullName}`,
		competitions: `We have the following competitions:<br />${party.getCompetitionsText()}`,
		generator:    "",
	}
	
	// Insert output using jQuery
	Object.keys(output).forEach(key => {
		htmlElements.includes(key)
			? $("#" + key).html(output[key])
			: $("#" + key).text(output[key]);
	})
	
}

$(document).ready(run);
