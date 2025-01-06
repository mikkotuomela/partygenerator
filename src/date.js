// PartyDate class
class PartyDate extends Date {
  constructor(days = 0) {
    super();
    this.setDate(this.getDate() + days);
    this.text = this._getFormattedText();
    this.year = this.getFullYear();
    //console.log(`PartyDate created: ${this.text}`);
  }
  // Get nicely formatted date
  _getFormattedText()  {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return this.toLocaleDateString(config.locale, options);
  }
}

