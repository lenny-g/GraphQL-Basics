const capital = (parent) => {
  return {
    name: parent._capital,
    latitude: parent.latitude,
    longitude: parent.longitude,
  };
};

module.exports = capital;
