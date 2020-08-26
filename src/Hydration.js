class Hydration {
  constructor(id) {
    this.id = id;
  }

  getDataFromId(data) {
      this.data = data.filter(instance => instance.userID === this.id);
  }

  getAverageFlOzPerDay() {
    let totalOz = this.data.reduce((currentTotalOz, currentDay) => {
      return currentTotalOz + currentDay.numOunces;
    }, 0);
    return totalOz / this.data.length;
  }
}


if (typeof module !== 'undefined') {
  module.exports = Hydration;
}