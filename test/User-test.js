const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');

describe('User', () => {
  let user1;
  let user2;
  let user3; 
  let users;
  let userRepository;
  
  beforeEach(() => {
    userData = {
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
  
    user = new User(userData);

    it('Should have an id', () => {
      expect(user.id).to.equal(userData.id);
    });
  });

  it('Should have an id', () => {
    expect(user.id).to.equal(userData.id);
  });

  it('Should have a name', () => {
    expect(user.name).to.equal(userData.name);
  });

  it('Should have an address', () => {
    expect(user.address).to.equal(userData.address);
  });

  it('Should have an email', () => {
    expect(user.email).to.equal(userData.email);
  });

  it('Should have a strideLength', () => {
    expect(user.strideLength).to.equal(userData.strideLength);
  });

  it('Should have a dailyStepGoal', () => {
    expect(user.dailyStepGoal).to.equal(userData.dailyStepGoal);
  });

  it('Should have friends', () => {
    expect(user.friends).to.equal(userData.friends);
  });
});