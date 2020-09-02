const chai = require('chai');
const expect = chai.expect;

const Hydration = require('../src/Hydration');

describe('Hydration', () => {
  let hydrationTestData;
  let user2HydrationWeekData;
  let hydration;
  
  beforeEach(() => {
    hydrationTestData = [
      {
        "userID": 2,
        "date": "2019/06/09",
        "numOunces": 209
      },
      {
        "userID": 2,
        "date": "2019/06/10",
        "numOunces": 210
      },
      {
        "userID": 2,
        "date": "2019/06/11",
        "numOunces": 211
      },
      {
        "userID": 2,
        "date": "2019/06/12",
        "numOunces": 212
      },
      {
        "userID": 2,
        "date": "2019/06/13",
        "numOunces": 213
      },
      {
        "userID": 2,
        "date": "2019/06/14",
        "numOunces": 214
      },
      {
        "userID": 1,
        "date": "2019/06/15",
        "numOunces": 115
      },
      {
        "userID": 2,
        "date": "2019/06/15",
        "numOunces": 215
      },
      {
        "userID": 3,
        "date": "2019/06/15",
        "numOunces": 315
      },
      {
        "userID": 2,
        "date": "2019/06/16",
        "numOunces": 216
      },
      {
        "userID": 2,
        "date": "2019/06/17",
        "numOunces": 217
      },
      {
        "userID": 2,
        "date": "2019/06/18",
        "numOunces": 218
      },
      {
        "userID": 2,
        "date": "2019/06/19",
        "numOunces": 219
      },
      {
        "userID": 2,
        "date": "2019/06/20",
        "numOunces": 220
      },
      {
        "userID": 2,
        "date": "2019/06/21",
        "numOunces": 221
      },
      {
        "userID": 2,
        "date": "2019/06/22",
        "numOunces": 222
      }
    ]

    user2HydrationWeekData = [
      {
        "userID": 2,
        "date": "2019/06/16",
        "numOunces": 216
      },
      {
        "userID": 2,
        "date": "2019/06/17",
        "numOunces": 217
      },
      {
        "userID": 2,
        "date": "2019/06/18",
        "numOunces": 218
      },
      {
        "userID": 2,
        "date": "2019/06/19",
        "numOunces": 219
      },
      {
        "userID": 2,
        "date": "2019/06/20",
        "numOunces": 220
      },
      {
        "userID": 2,
        "date": "2019/06/21",
        "numOunces": 221
      },
      {
        "userID": 2,
        "date": "2019/06/22",
        "numOunces": 222
      }
    ]

    hydration = new Hydration(2, hydrationTestData)
  });

  it('should be a function', () => {
    expect(Hydration).to.be.a('function');
  });

  it('should be an instance of Hydration', () => {
    expect(hydration).to.be.an.instanceof(Hydration);
  });
  
  it('should be able to get data from an id', () => {
    let user2Data = [
      hydrationTestData[0],
      hydrationTestData[1],
      hydrationTestData[2],
      hydrationTestData[3],
      hydrationTestData[4],
      hydrationTestData[5],
      hydrationTestData[7],
      hydrationTestData[9],
      hydrationTestData[10],
      hydrationTestData[11],
      hydrationTestData[12],
      hydrationTestData[13],
      hydrationTestData[14],
      hydrationTestData[15]
    ]
    expect(hydration.data).to.deep.equal(user2Data);
  });

  it('should be able to get average Fl Oz per day for all-time', () => {
    let result = hydration.getAverageFlOzPerDay()
    expect(result).to.deep.equal(215.5);
  });

  it('should be able to get fl oz drank on a specific day', () => {
    let result = hydration.getFlOzOnDate("2019/06/15");
    expect(result).to.deep.equal(215);
  });

  it('should be able to find one week of numOunces', () => {
    let result = hydration.getOzForPreviousSevenDays("2019/06/22");
    expect(result).to.deep.equal(user2HydrationWeekData);
  });
});
