
if (typeof require !== 'undefined') {
  var moment = require('./moment');
 }

class Hydration {
  constructor(id, data) {
    this.id = id;
    this.data = data.filter(instance => instance.userID === this.id)
  }

  getAverageFlOzPerDay() {
    let totalOz = this.data.reduce((currentTotalOz, currentDay) => {
      return currentTotalOz + currentDay.numOunces;
    }, 0);
    return totalOz / this.data.length;
  }
  
  getFlOzOnDate(date) {
    let hydrationOnDate = this.data.find((_day, index) => {
      return date === this.data[index].date;
    });
    return hydrationOnDate.numOunces;
  }

  getOzForPreviousSevenDays(day) {
    let currentDay = moment(day, 'YYYY/MM/DD').add(1, 'day');
    let weekAgo = currentDay.clone().subtract(8,'d');
    let daysInWeek = this.data.filter(instance => {
      let dayInLoop = moment(instance.date, 'YYYY/MM/DD').isBetween(weekAgo, currentDay);
      return dayInLoop
    });
    return daysInWeek.map(instance => {
      return instance.numOunces;
    });
  }
}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}