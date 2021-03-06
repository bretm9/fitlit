const chai = require('chai');
const expect = chai.expect;

const SleepRepository = require('../src/SleepRepository');
const Sleep = require('../src/Sleep');

describe('SleepRepository', () => {
  let sleepData;
  let sleepUserData1;
  let sleepUserData2;
  let organizedTestData;
  let sleepUser1;
  let sleepUser2;
  let sleepRepository;
  let arrayOfUsers;
  
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
        "hoursSlept": 9,
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
        "hoursSlept": 9,
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

    organizedTestData = {
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
        { userID: 2, date: '2019/06/22', hoursSlept: 9, sleepQuality: 3 },
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

    sleepUser1 = new Sleep(1, sleepUserData1)
    sleepUser2 = new Sleep(2, sleepUserData2)
    sleepRepository = new SleepRepository(sleepData);

    sleepRepository.organizedData = organizedTestData;

    arrayOfUsers = Object.values(sleepRepository.organizedData);

    sleepRepository.users = arrayOfUsers.map((user, index) => {
      return new Sleep((index + 1), user);
    });
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

  it('should be able to return users with sleep quality above 3 based on a week', () => { 
    let topThreeUsers = sleepRepository.getTopSleepUsersBySleepQuality("2019/06/22");
    expect(topThreeUsers).to.deep.equal([sleepUser1]);
  });

  it('should be able to return the user with the most sleep for a given day', () => { 
    let result = sleepRepository.getTopSleepUsersByHoursSlept("2019/06/22")
    expect(result).to.deep.equal([sleepUser2.data[0]]);
  });

  it('should be able to return the user with the most sleep for a given day', () => { 
    let result = sleepRepository.getTopSleepUsersByHoursSlept("2019/06/18")
    expect(result).to.deep.equal([sleepUser1.data[3], sleepUser2.data[4]]);
  });
});