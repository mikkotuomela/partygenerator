// Event class
class Event {
  constructor(actor, event, amount) {
    this.actor  = actor;
    this.amount = amount;
    this.event  = event;
  }
}

// Sponsor class
class Sponsor extends Event {
  constructor(actor, event, amount) {
    super(actor, event, amount);
  }
}

// Sponsor class
class Expense extends Event {
  constructor(actor, event, amount) {
    super(actor, event, amount);
  }
}