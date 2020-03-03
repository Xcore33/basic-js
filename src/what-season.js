
module.exports = function getSeason(date) {
  if(!date) return 'Unable to determine the time of year!'
  if(Object.prototype.toString.call(date) === "[object Date]") {
    //now compare each (date)
    switch(date.getMonth()+1) {
      case 1:
      return 'winter';
      case 2:
      return 'winter';
      case 12:
      return 'winter';
      case 3:
      return 'spring';
      case 4:
      return 'spring';
      case 5:
      return 'spring';
      case 6:
      return 'summer';
      case 7:
      return 'summer';
      case 8:
      return 'summer';
      case 9:
      return 'fall';
      case 10:
      return 'fall';
      case 11:
      return 'fall';
      default: return 'Unable to determine the time of year!';
    }
  } else  if(isNaN(date.getTime())) {
    throw Error();
  }
};