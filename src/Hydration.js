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
  
  getFlOzOnDate(date) {
    let hydrationOnDate = this.data.find((_day, index) => {
      return date === this.data[index].date;
    });
    return hydrationOnDate.numOunces;
  }
}


if (typeof module !== 'undefined') {
  module.exports = Hydration;
}