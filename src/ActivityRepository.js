class ActivityRepository {
  constructor(data) {
    this.data = data;
  }

  getAverageActivity(date, property) {
    let activityToday = this.data.filter(day => day.date === date)
    let totalActivity = activityToday.reduce((activity, currentUser) => {
      return activity + currentUser[property];
    }, 0);
    return +(totalActivity / activityToday.length).toFixed(1);
  }
}

if (typeof module !== 'undefined') {
  module.exports = ActivityRepository;
}