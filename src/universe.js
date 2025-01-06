// Configuration for the universe
const config = {
  minDays:         180,
  dayRange:        300,
  locale:          'en-US',
  competitions:    10,
  fakerAvailable:  testFaker(),
  universe: {
    group:       30,
    company:     10,
    association: 5,
    foundation:  5,
    person:      100,
    speaker:     10,
    scener:      500
  }
};

// Universe class
class Universe {

  // Build the universe
  constructor() {
    // Get class map and universe config
    this.classMap = this._getClassMap();
    this.universe = config.universe;

    // Loop through all item types in universe
    Object.keys(this.universe).forEach(entityType => {
      this[entityType] = this._getRandomEntities(entityType);
    });
  }

  // Generate as many instances as the population says
  _getRandomEntities(entityType) {
    let items = [];
    for (let i = 0; i < this.universe[entityType]; i++) {
        const newEntity = new this.classMap[entityType]();
        this[entityType].push(newEntity);
    }
    return items;
  }

  // Get class based on its name
  _getClassMap() {
    return {
      scener: Scener,
      gamer: Gamer,
      group: Group,
      company: Company,
      association: Association,
      foundation: Foundation
    };
  }

  // Pop one entity and check if new ones need to be created
  _getEntity(entityType) {
    const newEntity = this[entityType].pop();
    if (this[entityType].length == 0)
      this[entityType] = this._getRandomEntities(entityType);
    return newEntity;
  }

  // Get entities
  getPerson()      { return this._getEntity('person');  }
  getScener()      { return this._getEntity('scener');  }
  getGamer()       { return this._getEntity('gamer');   }
  getCompany()     { return this._getEntity('company'); }
  getGroup()       { return this._getEntity('group');   }
  getAssociation() { return this._getEntity('group');   }
  getFoundation()  { return this._getEntity('group');   }

}
