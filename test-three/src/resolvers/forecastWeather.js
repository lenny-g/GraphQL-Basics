const { default: axios } = require("axios");

const forecastWeather = async (parent) => {
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${parent.latitude}&lon=${parent.longitude}&appid=393609ac7b2e5f25ccdd00e626ee13dd&units=imperial`;
  const { data } = await axios.get(url);
};

module.exports = forecastWeather;
