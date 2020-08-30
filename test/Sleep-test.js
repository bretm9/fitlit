const moment = require('moment');
const chai = require('chai');
const expect = chai.expect;

const Sleep = require('../src/Sleep');

describe('Sleep', () => {
  let sleepTestData;
  let user2SleepWeekData;
  let sleep;
  
  beforeEach(() => {
    sleepTestData = [
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
    ]

    sleep = new Sleep(1, sleepTestData)
  });

  it('should be a function', () => {
    expect(Sleep).to.be.a('function');
  });

  it('should be an instance of Sleep', () => {
    expect(sleep).to.be.an.instanceof(Sleep);
  });
  
  it('should be able to get data from an id', () => {
    let user1Data = [
      sleepTestData[0],
      sleepTestData[1],
      sleepTestData[2],
      sleepTestData[3],
      sleepTestData[4],
      sleepTestData[5],
      sleepTestData[6],
      sleepTestData[7]
    ]
    expect(sleep.data).to.deep.equal(user1Data);
  });

  it('should be able to get average hours slept per day for all-time', () => {
    let result = sleep.getAverageHrPerDay()
    expect(result).to.deep.equal(7.9);
  });

  it('should be able to get average quality of sleep per day for all-time', () => {
    let result = sleep.getAverageSleepQualityPerDay()
    expect(result).to.deep.equal(2.7);
  });

  it('should be able to get hours slept for a given day', () => {
    let result = sleep.getCurrentDaySleepInfo("2019/06/19", "hoursSlept")
    expect(result).to.deep.equal(10.7);
  });

  it('should be able to get sleep quality for a given day', () => {
    let result = sleep.getCurrentDaySleepInfo("2019/06/19", "sleepQuality")
    expect(result).to.deep.equal(1.2);
  });

  it('should be able to find one week of hours slept', () => {
    let result = sleep.getSleepInfoForPreviousSevenDays("2019/06/22", "hoursSlept");
    expect(result).to.deep.equal([4.1, 8, 10.4, 10.7, 9.3, 7.8, 7]);
  });

  it('should be able to find one week of sleep quality', () => {
    let result = sleep.getSleepInfoForPreviousSevenDays("2019/06/22", "sleepQuality");
    expect(result).to.deep.equal([3.8, 2.6, 3.1, 1.2, 1.2, 4.2, 3]);
  });
});
