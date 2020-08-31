
if (typeof require !== 'undefined') {
  var moment = require('./moment');
 }

class Sleep {
  constructor(id, data) {
    this.id = id;
    this.data = data;
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

  getCurrentDaySleepInfo(day, property) {
    let currentDaySleep = this.data.find(instance => {
      return instance.date === day;
    });
    return currentDaySleep[property];
  }

  getSleepInfoForPreviousSevenDays(day, property) {
    let currentDay = moment(day, 'YYYY/MM/DD').add(1, 'day');
    let weekAgo = currentDay.clone().subtract(8,'d');
    let daysInWeek = this.data.filter(instance => {
      let dayInLoop = moment(instance.date, 'YYYY/MM/DD').isBetween(weekAgo, currentDay);
      return dayInLoop
    });
    return daysInWeek.map(instance => instance[property]);
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