// PartyDate class
class PartyDate extends Date {
  constructor(days = 0) {
    super();
    this.setDate(this.getDate() + days);
    this.text = this.getFormattedText();
    this.year = this.getFullYear();
  }
  // Get nicely formatted date
  getFormattedText()  {
		const options = { year: 'numeric', month: 'long', day: 'numeric' };
		return this.toLocaleDateString(config.locale, options);
  }
}

