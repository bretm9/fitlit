class SleepRepository {
  constructor(data) {
    this.data = data;
  }

  getAverageSleepQuality() {
    let totalSleepQuality = this.data.reduce((sleepQuality, currentUser) => {
      return sleepQuality + currentUser.sleepQuality;
    }, 0);
    return +(totalSleepQuality / this.data.length).toFixed(1);
  }
}

if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
}