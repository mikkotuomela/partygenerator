// Universe class
class Universe {
  constructor() {
    this.sceners   = this._getRandomitems(Scener, config.universe.population.sceners);
    this.companies = this._getRandomItems(Company, config.universe.population.companies);
  }
  // Get one scener
  getScener() {
    return this.sceners.pop();
  }
  getCompany() {
    return this.companies.pop();
  }
  _getRandomItems(ItemType, population) {
    let items = [];
    for (let item_i = 0; item_i < population, item_i++) {
      items.push(new ItemType());
    }
    return items;
  }
}
