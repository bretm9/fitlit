if (typeof require !== 'undefined') {
  var moment = require('./moment');
 }

class Activity {
  constructor(id, data) {
    this.id = id;
    this.data = data;
  }

  getCurrentDayActivityInfo(date) {
    let currentDayActivity = this.data.find(instance => {
      return instance.date === date;
    });
    return currentDayActivity;
  }

  getActivityInfoForPreviousSevenDays(date) {
    let daysInWeek;
    let currentDay = moment(date, 'YYYY/MM/DD').add(1, 'day');
    let weekAgo = currentDay.clone().subtract(8,'d');
    return daysInWeek = this.data.filter(instance => {
      let dayInLoop = moment(instance.date, 'YYYY/MM/DD').isBetween(weekAgo, currentDay);
      return dayInLoop;
    });
  }
}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}