// Get a random integer between min and max
function rand(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

// Add random() method to array prototype
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

// Convert word lists into real arrays
function getWords(lists) {
  let words = {};
  Object.keys(lists).forEach(theme => {
    words[theme] = {};
    Object.keys(lists[theme]).forEach(key => {
      words[theme][key] = lists[theme][key].split(' ');
    });
  });
  return words;
}