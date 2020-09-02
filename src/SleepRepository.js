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

  getTopSleepUsersBySleepQuality(date) {
    let usersWithGoodSleep = this.users.filter(user => {
      let weekOfSleep = user.getSleepInfoForPreviousSevenDays(date)
      let totalSleepQuality = weekOfSleep.reduce((sleepQuality, day) => {
        return sleepQuality + day.sleepQuality;
      }, 0);
      return +(totalSleepQuality / 7).toFixed(1) > 3;
    });
    return usersWithGoodSleep;
  }

  getTopSleepUsersByHoursSlept(date) {
    let infoByDay = this.users.map(sleepUser => {
      let filteredByDay = sleepUser.data.filter(instance => instance.date === date)
      return filteredByDay[0];
    });
    let sortedByHoursSlept = infoByDay.sort((instanceA, instanceB) => {
      return instanceA.hoursSlept - instanceB.hoursSlept;
    });
    let userWithMostHoursSlept = sortedByHoursSlept[sortedByHoursSlept.length - 1]
    return sortedByHoursSlept.filter(instance => instance.hoursSlept === userWithMostHoursSlept.hoursSlept);
  }
}

if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
}