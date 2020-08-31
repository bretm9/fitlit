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
}

if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
}