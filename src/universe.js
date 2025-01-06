// Universe class
class Universe {
  constructor() {
    this._process()
  }
  // Process the whole universe
  _process() {
    var universe = {}
    // Loop through all item types in universe
    Object.keys(universe).forEach(key => {
     // Loop through all subtypes in universe 
      Object.keys(universe[key]).forEach(type => {
        // Check their population
        const n = config.universe.population[key][type];
        const ItemClass = this._getClass(key);
        this[key] = [];
        for (let item_i = 0; item_i < n; item_i++)
          this[key][type].push(new ItemClass());
      });
    });
  }
  // Get class based on its name
  _getClass(className) {
    switch (className) {
      case 'scener':  return Scener;
      case 'gamer':   return Gamer;
      case 'group':   return Group;
      case 'company': return Company;
    }
  }
  // Get one scener
  getScener() {
    return this.people.sceners.pop();
  }
  getGamer() {
    return this.people.gamers.pop();
  }
  getCompany() {
    return this.organizations.companies.pop();
  }
  getGroup() {
    return this.organizations.groups.pop();
  }
  _getRandomItems(ItemType, itemPopulation) {
    let items = [];
    const population = config.universe.population[item];
    for (let item_i = 0; item_i < population; item_i++)
      items.push(new ItemType());
    return items;
  }
}
