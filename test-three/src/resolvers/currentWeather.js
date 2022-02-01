const formatDate = require("../utils/formatDate");
const getDataFromApi = require("../utils/getDataFromApi");

const currentWeather = async (parent) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${parent.name}&appid=393609ac7b2e5f25ccdd00e626ee13dd`;
  const data = await getDataFromApi(url);
  return {
    date: formatDate(data?.dt),
    temperature: data?.main?.temp,
    humidity: data?.main?.humidity,
    windSpeed: data?.wind?.speed,
    weatherIconUrl: `http://openweathermap.org/img/w/${data?.weather[0].icon}.png`,
  };
};

module.exports = currentWeather;
