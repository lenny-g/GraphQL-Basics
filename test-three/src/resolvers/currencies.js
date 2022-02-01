const currencies = (parent, args) =>
  parent?._currencies
    ? Object.entries(parent?._currencies).map(([code, value]) => ({
        ...value,
        code,
      }))
    : [];

module.exports = currencies;
