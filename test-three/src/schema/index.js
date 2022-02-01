const { gql } = require("apollo-server");

const typeDefs = gql`
  type Weather {
    date: String
    temperature: Float
    humidity: Float
    windSpeed: Float
    weatherIconUrl: String
  }

  type City {
    name: String
    latitude: Float
    longitude: Float
    currentWeather: Weather
    forecastWeather: [Weather]
  }

  type Rate {
    code: String
    rate: Float
  }

  type Currency {
    code: String
    name: String
    symbol: String
    rates: [Rate]
  }

  type Country {
    name: String
    countryCode: String
    isIndependent: Boolean
    isUnMember: Boolean
    region: String
    languages: [String]
    latitude: Float
    longitude: Float
    population: Int
    flagImageUrl: String
    currencies: [Currency]
    capital: City
  }

  type Query {
    country(countryCode: String!): Country
  }
`;

module.exports = typeDefs;
