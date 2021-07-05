/* eslint-disable import/prefer-default-export */
function formatCurrency(prices) {
  return prices.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
}

export {
  formatCurrency,
};
