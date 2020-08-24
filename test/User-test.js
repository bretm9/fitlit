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

    it('should have an id', () => {
      expect(user.id).to.equal(userData.id);
    });
  });

  it('should have an id', () => {
    expect(user.id).to.equal(userData.id);
  });

  it('should have a name', () => {
    expect(user.name).to.equal(userData.name);
  });

  it('should have an address', () => {
    expect(user.address).to.equal(userData.address);
  });

  it('should have an email', () => {
    expect(user.email).to.equal(userData.email);
  });

  it('should have a strideLength', () => {
    expect(user.strideLength).to.equal(userData.strideLength);
  });

  it('should have a dailyStepGoal', () => {
    expect(user.dailyStepGoal).to.equal(userData.dailyStepGoal);
  });

  it('should have friends', () => {
    expect(user.friends).to.equal(userData.friends);
  });

  it('should be able to get first name', () => {
    firstName = user.getFirstName();
    expect(firstName).to.equal('Luisa');
  });
});