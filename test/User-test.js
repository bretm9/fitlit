const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');

describe('User', () => {
  let userTestData;
  let user;
  
  beforeEach(() => {
    userTestData = {
      "id": 1,
      "name": "Luisa Hane",
      "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
      "email": "Diana.Hayes1@hotmail.com",
      "strideLength": 4.3,
      "dailyStepGoal": 10000,
      "friends": [
        16,
        4,
        8
      ]
    }
  
    user = new User(userTestData);

    it('should have an id', () => {
      expect(user.id).to.equal(userTestData.id);
    });
  });

  it('should have an id', () => {
    expect(user.id).to.equal(userTestData.id);
  });

  it('should have a name', () => {
    expect(user.name).to.equal(userTestData.name);
  });

  it('should have an address', () => {
    expect(user.address).to.equal(userTestData.address);
  });

  it('should have an email', () => {
    expect(user.email).to.equal(userTestData.email);
  });

  it('should have a strideLength', () => {
    expect(user.strideLength).to.equal(userTestData.strideLength);
  });

  it('should have a dailyStepGoal', () => {
    expect(user.dailyStepGoal).to.equal(userTestData.dailyStepGoal);
  });

  it('should have friends', () => {
    expect(user.friends).to.equal(userTestData.friends);
  });

  it('should be able to get first name', () => {
    let firstName = user.getFirstName();
    expect(firstName).to.equal('Luisa');
  });
});