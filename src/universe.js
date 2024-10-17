// Universe class
class Universe {
  constructor() {
    this.people = {
      sceners:   this._getRandomItems(Scener, 'sceners'),
      gamers:    this._getRandomItems(Gamer, 'gamers'),
    };    
    this.organizations = {
      companies: this._getRandomItems(Company, 'companies'),
      groups:    this._getRandomItems(Group, 'groups'),
    };
  }
  // Get one scener
  getScener() {
    return this.sceners.pop();
  }
  getCompany() {
    return this.companies.pop();
  }
  _getRandomItems(ItemType, itemPopulation) {
    let items = [];
    const population = config.universe.population[item];
    for (let item_i = 0; item_i < population, item_i++) {
      items.push(new ItemType());
    }
    return items;
  }
}
