const BigNumber=require('bignumber.js');
module.exports = function multiply(first, second) {
	firstBig = new BigNumber(first);
	secondBig = new BigNumber(second);
  return firstBig.multipliedBy(secondBig).toFixed();
}
