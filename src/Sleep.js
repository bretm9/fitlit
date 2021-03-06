
if (typeof require !== 'undefined') {
  var moment = require('./moment');
 }

class Sleep {
  constructor(id, data) {
    this.id = id;
    this.data = data;
  }

  getAveragePerDay(property) {
    let total = this.data.reduce((currentTotal, currentDay) => {
      return currentTotal + currentDay[property];
    }, 0);
    return +(total / this.data.length).toFixed(1);
  }

  getCurrentDaySleepInfo(date) {
    let currentDaySleep = this.data.find(instance => {
      return instance.date === date;
    });
    return currentDaySleep;
  }

  getSleepInfoForPreviousSevenDays(date) {
    let daysInWeek;
    let currentDay = moment(date, 'YYYY/MM/DD').add(1, 'day');
    let weekAgo = currentDay.clone().subtract(8,'d');
    return daysInWeek = this.data.filter(instance => {
      let dayInLoop = moment(instance.date, 'YYYY/MM/DD').isBetween(weekAgo, currentDay);
      return dayInLoop
    });
  }

  compareTodayWithYesterday(date) {
    let yesterdayMoment = moment(date, 'YYYY/MM/DD').subtract(1,'d');
    let yesterdayDate = moment(yesterdayMoment).format('YYYY/MM/DD');
    let yesterdaySleepData = this.data.filter(instance => instance.date === yesterdayDate);
    let todaySleepData = this.data.filter(instance => instance.date === date);
    let comparison = Math.floor(((todaySleepData[0].sleepQuality/5) - (yesterdaySleepData[0].sleepQuality/5))*100);
    return `${comparison}%`
  }
}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}