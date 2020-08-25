class UserRepository {
  constructor(data) {
    this.data = data;
  }

  getUserData(id) {
    let userData = this.data.filter(user => {
      return user.id === id;
    });
    return userData[0];
  }

  getAverageStepGoals() {
    let totalStepGoals = this.data.reduce((totalSteps, currentUser) => {
      return totalSteps + currentUser.dailyStepGoal;
    }, 0);
    return Math.floor(totalStepGoals / this.data.length);
  }
}

if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}