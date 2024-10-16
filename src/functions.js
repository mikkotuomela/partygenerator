// List class
class WordList {
	constructor(list) {
		this.list  = list;
		this.items = list.split(' ');
	}
	sample() {
		return this.items[rand(this.items.length, 0)];
	}
}

Array.prototype.random = function () {
  return this[rand(this.length, 0)];
}

// Test if faker is available
function testFaker() {
	try {
		const test = faker.address.city();
		console.log('Faker is available');
		return true;
	} catch (e) {
		console.log('Faker is not available');
		return false;
	}
}

// Get a random integer between min and max
function rand(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

// Helper function to sample items from a string-based list
function sample(items) {
	items = items.split(' ');
	return items[rand(items.length, 0)];
}
