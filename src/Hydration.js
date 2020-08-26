class Hydration {
  constructor(id) {
    this.id = id;
  }

  getDataFromId(data) {
      return data.filter(instance => instance.userID === this.id);
  }
}


if (typeof module !== 'undefined') {
  module.exports = Hydration;
}