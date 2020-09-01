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
}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}