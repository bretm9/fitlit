class ActivityRepository {
  constructor(data) {
    this.data = data;
  }

  getAverageActivity(property) {
    let totalActivity = this.data.reduce((activity, currentUser) => {
      return activity + currentUser[property];
    }, 0);
    return +(totalActivity / this.data.length).toFixed(1);
  }
}

if (typeof module !== 'undefined') {
  module.exports = ActivityRepository;
}