// Commented out if block in order for code to be compatible in browser. 
// This currently breaks testing. 
// Will refactor.

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
    let organizedData = this.data.reduce((allUsers, instance) => {
      if (!allUsers[`user${instance.userID}`]) {
        allUsers[`user${instance.userID}`] = [];
      }
      allUsers[`user${instance.userID}`].push(instance);
      return allUsers;
    }, {});
    this.organizedData = organizedData;
  }
  
  generateSleepObjects() {
    let arrayOfUsers = Object.values(this.organizedData)

    this.users = arrayOfUsers.map((user, index) => {
      return new Sleep((index + 1), user);
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

  createCurrentUser(id) {
    let userData = this.data.filter(instance => instance.userID === id)
    return new Sleep(id, userData);
  }
}

if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
}