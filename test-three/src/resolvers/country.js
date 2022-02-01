const getDataFromApi = require("../utils/getDataFromApi");

const country = async (_, args) => {
  // get country code
  const { countryCode } = args;

  // get data from API
  const url = `https://restcountries.com/v3.1/alpha/${countryCode}`;

  const data = await getDataFromApi(url);

  const countryData = data[0];
  // transform data
  // return
  return {
    name: countryData?.name?.common,
    CountryCode: countryData?.cca2,
    isIndependent: countryData?.independent,
    isUnMember: countryData?.unMember,
    region: countryData?.region,
    languages: Object.values(countryData?.languages || {}),
    latitude: countryData?.latlng[0],
    longitude: countryData?.latlng[1],
    population: countryData?.population,
    flagImageUrl: countryData?.flags?.png,
    _currencies: countryData?.currencies,
    _capital: countryData?.capital[0],
  };
};

module.exports = country;
