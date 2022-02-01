const country = require("./country");
const currencies = require("./currencies");
const rates = require("./rates");
const capital = require("./capital");
const currentWeather = require("./currentWeather");
const forecastWeather = require("./forecastWeather");

const resolver = {
  Query: {
    country,
  },
  Country: {
    currencies,
    capital,
  },
  Currency: {
    rates,
  },
  City: {
    currentWeather,
    forecastWeather,
  },
};

module.exports = resolver;
