// Configuration for the universe
const config = {
  minDays:        180,
  dayRange:       300,
  locale:         'en-US',
  competitions:   10,
  fakerAvailable: testFaker(),
  universe: {
    group: {
      population: 30
    },
    company: {
      population: 10
    },
    association: {
      population: 5
    },
    foundation: {
      population: 5
    },
    person: {
      population: 100,
      minAge:     10,
      maxAge:     55
    },
    speaker: {
      population: 10,
      minAge:     25,
      maxAge:     65
    },
    scener: {
      population: 500,
      minAge:     23,
      maxAge:     55
    },
    gamer: {
      population: 500,
      minAge:     9,
      maxAge:     35
    }
  }
};

// Universe class
class Universe {

  // Build the universe
  constructor(universe) {
    // Get class map and universe config
    this.classMap = this._getClassMap();
    this.universe = universe;

    // Loop through all item types in universe
    Object.keys(this.universe).forEach(entityType => {
      this[entityType] = this._getRandomEntities(entityType);
    });
  }

  // Generate as many instances as the population says
  _getRandomEntities(entityType) {
    let items = [];
    for (let i = 0; i < this.universe[entityType].population; i++)
        items.push(new this.classMap[entityType]());
    return items;
  }

  // Get class based on its name
  _getClassMap() {
    return {
      person:      Person,
      scener:      Scener,
      speaker:     Speaker,
      gamer:       Gamer,
      group:       Group,
      company:     Company,
      association: Association,
      foundation:  Foundation
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

// Create the universe
console.log("Now creating the universe");
const universe = new Universe(config.universe);