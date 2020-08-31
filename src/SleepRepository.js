if (typeof module !== 'undefined') {
  var Sleep = require('../src/Sleep');
}

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

  getDataOrganizedByUser() {
    return this.data.reduce((allUsers, instance) => {
      if (!allUsers[`user${instance.userID}`]) {
        allUsers[`user${instance.userID}`] = [];
      }
      allUsers[`user${instance.userID}`].push(instance);
      return allUsers;
    }, {});
  }
  
  generateSleepObjects(organizedData) {
    let arrayOfUsers = Object.values(organizedData)

    this.users = arrayOfUsers.map((user, index) => {
      let newUser;
      return newUser = new Sleep((index + 1), user);
    });
  }

  getTopSleepUsers(date) {
    let usersWithGoodSleep = this.users.filter(user => {
      let weekSleepQuality = user.getSleepInfoForPreviousSevenDays(date, "sleepQuality")
      let totalSleepQuality = weekSleepQuality.reduce((sleepQuality, day) => {
        return sleepQuality + day;
      });
      return +(totalSleepQuality / 7).toFixed(1) > 3;
    });
    return usersWithGoodSleep;
  }

  getMostSleepUsers(date) {
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