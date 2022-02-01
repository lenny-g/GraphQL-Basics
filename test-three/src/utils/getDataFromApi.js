const axios = require("axios");
const logger = require("winston");

const getDataFromApi = async () => {
  try {
    logger.info(`fetching data from ${url}`);
    const { data } = await axios.get(url);
  } catch (error) {
    console.log["ERROR"];
  }
};

module.exports = getDataFromApi;
