let favoriteCityId = 'rome';
console.log(favoriteCityId);

favoriteCityId = 'paris';
console.log(favoriteCityId);

const citiesId = ['paris', 'nyc', 'rome', 'rio-de-janeiro'];
console.log(citiesId);

// TypeError: Assignment to constant variable.
//citiesId = [];

citiesId.push('tokyo');
console.log(citiesId);

function getWeather(cityId) {
  let city = cityId.toUpperCase();
  let temperature = 20;
  return { city, temperature };
}

const weather = getWeather(favoriteCityId);
console.log(weather);

const { city, temperature } = getWeather(favoriteCityId);
console.log(city);
console.log(temperature);

let [parisID, nycId, ...othersCitiesId] = citiesId;
console.log(parisID);
console.log(nycId);
console.log(othersCitiesId.length);

class Trip {
  constructor(id, name, imageUrl) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
  }

  get price() {
    return this._price;
  }
  set price(newPrice) {
    this._price = newPrice;
  }

  toString() {
    return `Trip [${this.id} ${this.name} ${this.imageUrl} ${this._price}]`;
  }

  static getDefaultTrip() {
    return new Trip(
      'rio-de-janiero',
      'Rio de Janiero',
      'img/rio-de-janeiro.jpg'
    );
  }
}

const parisTrip = new Trip('paris', 'Paris', 'img/paris.jpg');
console.log(parisTrip);
console.log(parisTrip.name);
console.log(parisTrip.toString());
parisTrip.price = 100;
console.log(parisTrip.toString());
console.log(Trip.getDefaultTrip().toString());

class FreeTrip extends Trip {
  constructor(id, name, imageUrl, price = 0) {
    super(id, name, imageUrl);
    this.price = 0;
  }
  toString() {
    return `Free${super.toString()}`;
  }
}
const freeTrip = new FreeTrip('nantes', 'Nantes', 'img/nantes.jpg');
console.log(freeTrip.toString());

class TripService {
  constructor() {
    const trips = new Set();
    trips.add(new Trip('paris', 'Paris', 'img/paris.jpg'));
    trips.add(new Trip('nantes', 'Nantes', 'img/nanges.jpg'));
    trips.add(
      new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')
    );
    this.trips = trips;
  }
  findByName(tripName) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let trip;
        this.trips.forEach(val => {
          if (val.name == tripName) {
            trip = val;
          }
        });
        if (trip) {
          resolve(trip);
        } else {
          reject(`No trip with name ${tripName}`);
        }
      }, 2000);
    });
  }
}

class PriceService {
  constructor() {
    // TODO Map of 2 trips
    const prices = new Map();
    prices.set('paris', 100);
    prices.set('rio-de-janeiro', 800);
    this.prices = prices;
  }

  findPriceByTripId(tripId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let price;
        this.prices.forEach((val, key) => {
          if (key == tripId) {
            price = val;
          }
        });
        if (price) {
          resolve(price);
        } else {
          reject(`No price found for id ${tripId}`);
        }
      }, 2000);
    });
  }
}

const priceSvc = new PriceService();
const tripSvc = new TripService();
tripSvc.findByName('Paris').then(
  val => {
    console.log(val.toString());
  },
  err => {
    console.log(err);
  }
);
tripSvc.findByName('Toulouse').then(
  val => {
    console.log(val.toString());
  },
  err => {
    console.log(err);
  }
);
tripSvc
  .findByName('Rio de Janeiro')
  .then(trip => priceSvc.findPriceByTripId(trip.id))
  .then(price => {
    console.log(`Price found ${price}`);
  })
  .catch(err => {
    console.log(err);
  });
tripSvc
  .findByName('Nantes')
  .then(trip => priceSvc.findPriceByTripId(trip.id))
  .then(price => {
    console.log(`Price found ${price}`);
  })
  .catch(err => {
    console.log(err);
  });
