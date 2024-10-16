/*
Partygenerator 1.0 by ravel
Probably doesn't work with IE because of template literals :------D
*/

// Run the whole thing
function run() {

	// Generate the party
	const days = Math.floor(Math.random() * DAY_RANGE) + MIN_DAYS;	
	const party = new Party(days);
	party.generate();

	// Generate output
	const invParty = party.invitation.party;
	const html_elements = ["competitions"];
	const output = {
		title:        `${party.name} ${party.year}`,
		date:         `From ${party.formattedStartDate} to ${party.formattedEndDate}`,
		venue:        `Party place: ${party.venue.name} (capacity: ${party.venue.capacity} computer places!!!) in ${party.city}, ${party.country}!`,
		head:         `Head organizer: ${party.headOrg.nameWithFullHandle}`,
		inv:          `Check out our invitation intro released on ${invParty.formattedStartDate} at ${invParty.name} ${invParty.year} in ${invParty.city}, ${invParty.country}!`,
		sponsor:      `Main sponsor: ${party.mainSponsor.fullName}`,
		competitions: `We have the following competitions:<br />${party.getCompetitionsText()}`,
		generator:    "",
	}
	
	// Insert output
	Object.keys(output).forEach(key => {
		html_elements.includes(key)
			? $("#" + key).html(output[key])
			: $("#" + key).text(output[key]);
	})
	
}

$(document).ready(run);
