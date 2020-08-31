const chai = require('chai');
const expect = chai.expect;

const SleepRepository = require('../src/SleepRepository');
const Sleep = require('../src/Sleep');

describe('SleepRepository', () => {
  let sleepData;
  let sleepUserData1;
  let sleepUserData2;
  let organizedData;
  let sleepRepository;
  let sleepUser1;
  let sleepUser2;
  
  beforeEach(() => {
    sleepData = [
      {
        "userID": 1,
        "date": "2019/06/15",
        "hoursSlept": 6.1,
        "sleepQuality": 4.2
      },
      {
        "userID": 1,
        "date": "2019/06/16",
        "hoursSlept": 4.1,
        "sleepQuality": 4.8
      },
      {
        "userID": 1,
        "date": "2019/06/17",
        "hoursSlept": 8,
        "sleepQuality": 4.6
      },
      {
        "userID": 1,
        "date": "2019/06/18",
        "hoursSlept": 10.4,
        "sleepQuality": 4.1
      },
      {
        "userID": 1,
        "date": "2019/06/19",
        "hoursSlept": 10.7,
        "sleepQuality": 4.2
      },
      {
        "userID": 1,
        "date": "2019/06/20",
        "hoursSlept": 9.3,
        "sleepQuality": 4.2
      },
      {
        "userID": 2,
        "date": "2019/06/22",
        "hoursSlept": 7,
        "sleepQuality": 3
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
        "sleepQuality": 1.8
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
        "sleepQuality": 1.4
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
        "sleepQuality": 2.2
      }
    ];

    sleepUserData1 = [
      {
        "userID": 1,
        "date": "2019/06/15",
        "hoursSlept": 6.1,
        "sleepQuality": 4.2
      },
      {
        "userID": 1,
        "date": "2019/06/16",
        "hoursSlept": 4.1,
        "sleepQuality": 4.8
      },
      {
        "userID": 1,
        "date": "2019/06/17",
        "hoursSlept": 8,
        "sleepQuality": 4.6
      },
      {
        "userID": 1,
        "date": "2019/06/18",
        "hoursSlept": 10.4,
        "sleepQuality": 4.1
      },
      {
        "userID": 1,
        "date": "2019/06/19",
        "hoursSlept": 10.7,
        "sleepQuality": 4.2
      },
      {
        "userID": 1,
        "date": "2019/06/20",
        "hoursSlept": 9.3,
        "sleepQuality": 4.2
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
      }
    ]

    sleepUserData2 = [
      {
        "userID": 2,
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
        "sleepQuality": 1.8
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
        "sleepQuality": 1.4
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
        "sleepQuality": 2.2
      }
    ]

    organizedData = {
      user1: [
        {
          userID: 1,
          date: '2019/06/15',
          hoursSlept: 6.1,
          sleepQuality: 4.2
        },
        {
          userID: 1,
          date: '2019/06/16',
          hoursSlept: 4.1,
          sleepQuality: 4.8
        },
        { userID: 1, date: '2019/06/17', hoursSlept: 8, sleepQuality: 4.6 },
        {
          userID: 1,
          date: '2019/06/18',
          hoursSlept: 10.4,
          sleepQuality: 4.1
        },
        {
          userID: 1,
          date: '2019/06/19',
          hoursSlept: 10.7,
          sleepQuality: 4.2
        },
        {
          userID: 1,
          date: '2019/06/20',
          hoursSlept: 9.3,
          sleepQuality: 4.2
        },
        {
          userID: 1,
          date: '2019/06/21',
          hoursSlept: 7.8,
          sleepQuality: 4.2
        },
        { userID: 1, date: '2019/06/22', hoursSlept: 7, sleepQuality: 3 }
      ],
      user2: [
        { userID: 2, date: '2019/06/22', hoursSlept: 7, sleepQuality: 3 },
        {
          userID: 2,
          date: '2019/06/15',
          hoursSlept: 6.1,
          sleepQuality: 2.2
        },
        {
          userID: 2,
          date: '2019/06/16',
          hoursSlept: 4.1,
          sleepQuality: 1.8
        },
        { userID: 2, date: '2019/06/17', hoursSlept: 8, sleepQuality: 2.8 },
        {
          userID: 2,
          date: '2019/06/18',
          hoursSlept: 10.4,
          sleepQuality: 1.4
        },
        {
          userID: 2,
          date: '2019/06/19',
          hoursSlept: 10.7,
          sleepQuality: 2
        },
        {
          userID: 2,
          date: '2019/06/20',
          hoursSlept: 9.3,
          sleepQuality: 2.2
        },
        {
          userID: 2,
          date: '2019/06/21',
          hoursSlept: 7.8,
          sleepQuality: 2.2
        }
      ]
    }

    sleepRepository = new SleepRepository(sleepData);

    sleepUser1 = new Sleep(1, sleepUserData1)
    sleepUser2 = new Sleep(2, sleepUserData2)
  });
 
  it('should be a function', () => {
    expect(SleepRepository).to.be.a('function');
  });

  it('should be an instance of SleepRepository', () => {
    expect(sleepRepository).to.be.an.instanceof(SleepRepository);
  });

  it('should have a property "data" that takes in a set of sleep data', () => { 
    expect(sleepRepository.data).to.equal(sleepData);
  });
 
  it('should be able to return average sleep quality for all users', () => { 
    let averageSleepQuality = sleepRepository.getAverageSleepQuality();
    expect(averageSleepQuality).to.equal(3.2);
  });

  it('should be able to organize data by user', () => { 
    let result = sleepRepository.getDataOrganizedByUser()
    expect(result).to.deep.equal(organizedData);
  });

  it('should be able to generate sleep objects for all users from organized data', () => { 
    let organizedData = sleepRepository.getDataOrganizedByUser()
    sleepRepository.generateSleepObjects(organizedData);
    expect(sleepRepository.users).to.deep.equal([sleepUser1, sleepUser2]);
  });

  it('should be able to return users with sleep quality above 3 based on a week', () => { 
    let organizedData = sleepRepository.getDataOrganizedByUser()
    sleepRepository.generateSleepObjects(organizedData);
    let topThreeUsers = sleepRepository.getTopSleepUsers("2019/06/22", "sleepQuality");
    expect(topThreeUsers).to.deep.equal([sleepUser1]);
  });

  it('should be able to return users with sleep quality above 3 based on a week', () => { 
    let organizedData = sleepRepository.getDataOrganizedByUser()
    sleepRepository.generateSleepObjects(organizedData);
    let topThreeUsers = sleepRepository.getTopSleepUsers("2019/06/22", "sleepQuality");
    expect(topThreeUsers).to.deep.equal([sleepUser1]);
  });
});