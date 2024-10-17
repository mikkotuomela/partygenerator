// Get a random integer between min and max
function rand(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

// Add random() method to array prototype
// If n == 1, return a random element
// If n != 1, return n elements as an array
Array.prototype.random = function (n = 1) {
  if (n == 1) return this[rand(this.length, 0)];
  if (n > this.length) n = this.length;
  const shuffled = this.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, n);
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
