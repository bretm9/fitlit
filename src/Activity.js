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

  getAverageActivityForWeek(date) {
    let activityInWeek = this.getActivityInfoForPreviousSevenDays(date)
    let total = activityInWeek.reduce((currentTotal, currentDay) => {
      return currentTotal + currentDay.minutesActive;
    }, 0);
    return Math.floor(total / 7);
  }
}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}