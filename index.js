/**
 * [Exercise 1] trimProperties copies an object trimming its properties
 */
function trimProperties(obj) {
  let newObj = obj;
  Object.keys(newObj).forEach((k) => {
    newObj[k] = newObj[k].trim();
  });
  return newObj;

  // ALTERNATIVE:
  //  return Object.keys(obj).reduce((acc, curr) => {
  //   acc[curr] = obj[curr].trim();
  //   return acc;
  // }, {});
}

/**
 * [Exercise 2] trimPropertiesMutation trims in place the properties of an object
 */
function trimPropertiesMutation(obj) {
  Object.keys(obj).forEach((k) => {
    obj[k] = obj[k].trim();
  });
  return obj;
}

/**
 * [Exercise 3] findLargestInteger finds the largest integer in an array of objects { integer: 1 }
 */
function findLargestInteger(integers) {
  const objKey = Object.keys(integers[0]);
  const values = integers.map((a) => a[objKey]);
  return Math.max.apply(null, values);
}

class Counter {
  /**
   * [Exercise 4A] Counter creates a counter
   * @param {number} initialNumber - the initial state of the count
   */
  constructor(initialNumber) {
    this.count = initialNumber + 1;
  }

  /**
   * [Exercise 4B] Counter.prototype.countDown counts down to zero
   * @returns {number} - the next count, does not go below zero
   *
   * EXAMPLE
   * const counter = new Counter(3)
   * counter.countDown() // returns 3
   * counter.countDown() // returns 2
   * counter.countDown() // returns 1
   * counter.countDown() // returns 0
   * counter.countDown() // returns 0
   */
  countDown() {
    if (this.count > 0) {
      this.count--;
    }
    return this.count;
  }
}

class Seasons {
  /**
   * [Exercise 5A] Seasons creates a seasons object
   */
  constructor() {
    this.season = "spring";
  }

  /**
   * [Exercise 5B] Seasons.prototype.next returns the next season
   * @returns {string} - the next season starting with "summer"
   *
   * EXAMPLE
   * const seasons = new Seasons()
   * seasons.next() // returns "summer"
   * seasons.next() // returns "fall"
   * seasons.next() // returns "winter"
   * seasons.next() // returns "spring"
   * seasons.next() // returns "summer"
   */
  next() {
    if (this.season === "spring") {
      return (this.season = "summer");
    }
    if (this.season === "summer") {
      return (this.season = "fall");
    }

    if (this.season === "fall") {
      return (this.season = "winter");
    }
    if (this.season === "winter") {
      return (this.season = "spring");
    }
  }
}

let seasons = new Seasons();
console.log(seasons.next());
console.log(seasons.next());
console.log(seasons.next());
console.log(seasons.next());
console.log(seasons.next());

class Car {
  /**
   * [Exercise 6A] Car creates a car object
   * @param {string} name - the name of the car
   * @param {number} tankSize - capacity of the gas tank in gallons
   * @param {number} mpg - miles the car can drive per gallon of gas
   */
  constructor(name, tankSize, mpg) {
    this.odometer = 0; // car initilizes with zero miles
    this.tank = tankSize; // car initiazes full of gas
    this.name = name;
    this.mpg = mpg; // ✨ initialize whatever other properties are needed
  }

  /**
   * [Exercise 6B] Car.prototype.drive adds miles to the odometer and consumes fuel according to mpg
   * @param {string} distance - the distance we want the car to drive
   * @returns {number} - the updated odometer value
   *
   * EXAMPLE
   * const focus = new Car('focus', 20, 30)
   * focus.drive(100) // returns 100
   * focus.drive(100) // returns 200
   * focus.drive(100) // returns 300
   * focus.drive(200) // returns 500
   * focus.drive(200) // returns 600 (ran out of gas after 100 miles)
   */
  drive(distance) {
    // const maxMiles = this.tank * this.mpg
    this.odometer = this.odometer + distance;
    // maxMiles - distance = milesLeft
  }

  /**
   * [Exercise 6C] Adds gallons to the tank
   * @param {number} gallons - the gallons of fuel we want to put in the tank
   * @returns {number} - the miles that can be driven after refueling
   *
   * EXAMPLE
   * const focus = new Car('focus', 20, 30)
   * focus.drive(600) // returns 600
   * focus.drive(1) // returns 600 (no distance driven as tank is empty)
   * focus.refuel(99) // returns 600 (tank only holds 20)
   */
  refuel(gallons) {
    // ✨ implement
  }
}

/**
 * [Exercise 7] Asynchronously resolves whether a number is even
 * @param {number} number - the number to test for evenness
 * @returns {promise} - resolves true if number even, false otherwise
 *
 * EXAMPLE
 * isEvenNumberAsync(2).then(result => {
 *    // result is true
 * })
 * isEvenNumberAsync(3).then(result => {
 *    // result is false
 * })
 */
async function isEvenNumberAsync(number) {
  const remainder = number % 2;

  if (remainder === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEvenNumberAsync(4));

module.exports = {
  trimProperties,
  trimPropertiesMutation,
  findLargestInteger,
  isEvenNumberAsync,
  Counter,
  Seasons,
  Car,
};
