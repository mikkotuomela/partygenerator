// Party class
class Party { 
	constructor(days) {
		this.days      = days
		this.name      = this._getRandomName();
		this.startDate = new PartyDate(days);
		this.endDate   = new PartyDate(days + 2);
    this.year      = this.startDate.year;
		if (config.fakerAvailable) {
			this.city    = faker.address.city();
			this.country = faker.address.country();
		}
	  console.log(`Party created: ${this.name} ${this.year}`);
	}
	// Full party generation
	generate() {

		this.invitation  = new Invitation();
    this.invParty    = new this.constructor(this.days - 30);
	  this.mainSponsor = universe.getCompany();
		this.venue       = new Venue();
		this.headOrg     = universe.getScener();
    this.program     = new Program();

    // Sponsors and expenses
    this.events = []
    this.expenses      = this._getExpenses();
    this.expensesTotal = this.getEventsTotal(this.expenses);
    this.sponsors      = this._getSponsors();
    this.sponsorsTotal = this.getEventsTotal(this.sponsors);

    // Tickets
    this.ticketPricePresale = rand(10, 40);
    this.ticketPriceAtDoor  = this.ticketPricePresale + rand(2, 20)
    this.ticketsPresale     = Math.floor(0.01 * rand( 5, 40) * this.venue.capacity);
    this.ticketsAtDoor      = Math.floor(0.01 * rand(10, 90) * this.venue.capacity);
    this.ticketsTotal       = this.ticketsPresale + this.ticketsAtDoor;
    this.presaleTotal       = this.ticketsPresale * this.ticketPricePresale;
    this.atDoorTotal        = this.ticketsAtDoor  * this.ticketPriceAtDoor;
    this.combinedTotal      = this.presaleTotal   + this.atDoorTotal;
    console.log(`Visitors total: ${this.ticketsTotal}`);

    // Party events
    this.merchandiseSold    = this.ticketsTotal * rand( 5, 20);
    this.foodSold           = this.ticketsTotal * rand(10, 30);
    this.partyEventsTotal   = this.merchandiseSold + this.foodSold;

    // Result
    this.totalIncome        = this.sponsorsTotal + this.partyEventsTotal;
    this.totalExpenses      = this.expensesTotal;
    this.damage             = rand(0, 1) == 0 ? -this.ticketsTotal * rand(1, 10) : 0;
    this.prizeMoney         = -this.combinedTotal / 10 * rand(10, 100) * 0.01;
    this.totalResult        = this.totalIncome + this.totalExpenses + this.damage + this.prizeMoney;
  }
	// Get a random party name
	_getRandomName() {
		const partyStart  = words.party.start.random();
		const partyMiddle = words.party.middle.random();
		const partyEnd    = words.party.end.random();
		return `${partyStart} ${partyMiddle} ${partyEnd}`;
	}
  // Get random sponsors
  _getSponsors() {
    const scope = this.venue.capacity;
    const total = -this.getEventsTotal(this.expenses);
    let sponsors = [];
    for (let sponsor_i = 0; sponsor_i < config.sponsors; sponsor_i++) {
      if (sponsor_i == 0)
        sponsors.push(new Sponsor(this.mainSponsor, 'is the main sponsor for the event', 0.01 * rand(5, 40) * total));
      else
        sponsors.push(new Sponsor(this._getRandomOrg(), 'sponsors the event', 0.01 * rand(0, 10) * total));
    }
    return sponsors;
  }
  // Get a random organization
  _getRandomOrg() {
    const orgType = rand(1, 3);
    if (orgType == 1)
      return new Company();
    else if (orgType == 2)
      return new Association();
    else
      return new Foundation();
  }
  // Get expenses
  _getExpenses() {
    const scope = -this.venue.capacity;
    return [
      new Expense(this.venue,     'rent',                 scope * rand(10, 30)),
      new Expense(new Supplier(), 'audio and video tech', scope * rand(2, 20)),
      new Expense(new Supplier(), `computer places (${this.venue.capacity})`, scope * rand(1, 15)),
      new Expense(new Supplier(), 'random merchandise',   scope * rand(10, 20)),
      new Expense(new Supplier(), 'food for crew',        scope * rand(1, 4)),
      new Expense(new Supplier(), 'speakers etc.',        scope * rand(5, 15)),
      new Expense(new Supplier(), 'security',             scope * rand(0, 10))
    ];
  }
  // Get total sum
  getEventsTotal(events) {
    let total = 0;
    events.forEach(event => { total += event.amount; });
    return total;
  }
  // Get html for all events
  getEventsHtml(events) {
    let html = [];
    events.forEach(event => { html.push(`${event.actor.name} ${event.event}: ${event.amount.toFixed(2)} €`); });
    const total = this.getEventsTotal(events);
    html.push(`Total: ${total.toFixed(2)}`);
    return html.join('<br />');
  }
  // Get ticket sales html
  getTicketsHtml() {
    return [
      `Presale tickets: ${this.ticketsPresale} x ${this.ticketPricePresale.toFixed(2)} € = ${this.presaleTotal.toFixed(2)} €`,
      `Tickets sold at door: ${this.ticketsAtDoor} x ${this.ticketPriceAtDoor.toFixed(2)} € = ${this.atDoorTotal.toFixed(2)} €`,
      `Visitors total: ${this.ticketsTotal}`,
      `Ticket sales total: ${this.combinedTotal.toFixed(2)} €`
    ].join('<br />');
  }
  // Get party events html
  getPartyEventsHtml() {
    return [
      `Merchandise sold: ${this.merchandiseSold.toFixed(2)} €`,
      `Food sold: ${this.foodSold.toFixed(2)} €`,
      `Party events total: ${this.partyEventsTotal.toFixed(2)} €`
    ].join('<br />');
  }
  getTotalHtml() {
    return [
      `Total income: ${this.totalIncome.toFixed(2)} €`,
      `Expenses before party: ${this.totalExpenses.toFixed(2)} €`,
      `Cash prizes for competitions: ${this.prizeMoney.toFixed(2)} €`,
      `Damage to party place: ${this.damage.toFixed(2)} €`,
      `<span class="competition">Final result: ${this.totalResult.toFixed(2)} €</span>`
    ].join('<br />');
  }
}
