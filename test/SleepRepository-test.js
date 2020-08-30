const chai = require('chai');
const expect = chai.expect;

const SleepRepository = require('../src/SleepRepository');

describe('SleepRepository', () => {
  let sleepUser1;
  let sleepUser2;
  let sleepUser3; 
  let sleepUsers;
  let sleepRepository;
  
  beforeEach(() => {
    sleepUsers = [
      {
        "userID": 1,
        "date": "2019/06/15",
        "hoursSlept": 6.1,
        "sleepQuality": 2.2
      },
      {
        "userID": 1,
        "date": "2019/06/16",
        "hoursSlept": 4.1,
        "sleepQuality": 3.8
      },
      {
        "userID": 1,
        "date": "2019/06/17",
        "hoursSlept": 8,
        "sleepQuality": 2.6
      },
      {
        "userID": 1,
        "date": "2019/06/18",
        "hoursSlept": 10.4,
        "sleepQuality": 3.1
      },
      {
        "userID": 1,
        "date": "2019/06/19",
        "hoursSlept": 10.7,
        "sleepQuality": 1.2
      },
      {
        "userID": 1,
        "date": "2019/06/20",
        "hoursSlept": 9.3,
        "sleepQuality": 1.2
      },
      {
        "userID": 1,
        "date": "2019/06/21",
        "hoursSlept": 7.8,
        "sleepQuality": 4.2
      },
      {
        "userID": 1,
        "date": "2019/06/22",
        "hoursSlept": 7,
        "sleepQuality": 3
      },
      {
        "userID": 2,
        "date": "2019/06/15",
        "hoursSlept": 6.1,
        "sleepQuality": 2.2
      },
      {
        "userID": 2,
        "date": "2019/06/16",
        "hoursSlept": 4.1,
        "sleepQuality": 3.8
      },
      {
        "userID": 2,
        "date": "2019/06/17",
        "hoursSlept": 8,
        "sleepQuality": 2.8
      },
      {
        "userID": 2,
        "date": "2019/06/18",
        "hoursSlept": 10.4,
        "sleepQuality": 3.4
      },
      {
        "userID": 2,
        "date": "2019/06/19",
        "hoursSlept": 10.7,
        "sleepQuality": 2
      },
      {
        "userID": 2,
        "date": "2019/06/20",
        "hoursSlept": 9.3,
        "sleepQuality": 2.2
      },
      {
        "userID": 2,
        "date": "2019/06/21",
        "hoursSlept": 7.8,
        "sleepQuality": 3.2
      },
      {
        "userID": 2,
        "date": "2019/06/22",
        "hoursSlept": 7,
        "sleepQuality": 3
      }
    ];
    sleepRepository = new SleepRepository(sleepUsers);
  });
 
  it('should be a function', () => {
    expect(SleepRepository).to.be.a('function');
  });

  it('should be an instance of SleepRepository', () => {
    expect(sleepRepository).to.be.an.instanceof(SleepRepository);
  });

  it('should have a property "data" that takes in a set of sleep data', () => { 
    expect(sleepRepository.data).to.equal(sleepUsers);
  });
 
  it('should be able to return average sleep quality for all users', () => { 
    let averageSleepQuality = sleepRepository.getAverageSleepQuality();
    expect(averageSleepQuality).to.equal(2.7);
  });
});