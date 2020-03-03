
const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const K_LN_2= (0.693 / HALF_LIFE_PERIOD);

module.exports = function dateSample(sampleActivity) {
  if(typeof sampleActivity !== 'string' || !sampleActivity) return false;

  sampleActivity = parseFloat(sampleActivity);
  if(sampleActivity > 0 && sampleActivity < MODERN_ACTIVITY) {
    return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity)/K_LN_2);
  }
  else {
    return false;
  }
};
