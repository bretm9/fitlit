
if (typeof require !== 'undefined') {
  var moment = require('./moment');
 }

class Sleep {
  constructor(id, data) {
    this.id = id;
    this.data = data.filter(instance => instance.userID === this.id)
  }

  getAverageHrPerDay() {
    let totalHr = this.data.reduce((currentTotalHr, currentDay) => {
      return currentTotalHr + currentDay.hoursSlept;
    }, 0);
    return +(totalHr / this.data.length).toFixed(1);
  }

  getAverageSleepQualityPerDay() {
    let totalSleepQuality = this.data.reduce((currentTotalSleepQuality, currentDay) => {
      return currentTotalSleepQuality + currentDay.sleepQuality;
    }, 0);
    return +(totalSleepQuality / this.data.length).toFixed(1);
  }
}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}