const moment = require("moment");

const formatDate = (unixDateTime) => {
  return moment.unix(unixDateTime).format("Do MMM YYYY");
};

module.exports = formatDate;
