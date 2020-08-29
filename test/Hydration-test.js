const moment = require('moment');
// moment().format(); 
const chai = require('chai');
const expect = chai.expect;

const Hydration = require('../src/Hydration');

describe('Hydration', () => {
  let hydrationData;
  let hydration;
  
  beforeEach(() => {
    hydrationData = [
      {
        "userID": 2,
        "date": "2019/06/09",
        "numOunces": 50
      },
      {
        "userID": 2,
        "date": "2019/06/10",
        "numOunces": 70
      },
      {
        "userID": 2,
        "date": "2019/06/11",
        "numOunces": 65
      },
      {
        "userID": 2,
        "date": "2019/06/12",
        "numOunces": 60
      },
      {
        "userID": 2,
        "date": "2019/06/13",
        "numOunces": 75
      },
      {
        "userID": 2,
        "date": "2019/06/14",
        "numOunces": 79
      },{
        "userID": 1,
        "date": "2019/06/15",
        "numOunces": 37
      },
      {
        "userID": 2,
        "date": "2019/06/15",
        "numOunces": 75
      },
      {
        "userID": 3,
        "date": "2019/06/15",
        "numOunces": 47
      },
      {
        "userID": 2,
        "date": "2019/06/16",
        "numOunces": 82
      }
    ]
    hydration = new Hydration(2, hydrationData)
  });

  it('should be a function', () => {
    expect(Hydration).to.be.a('function');
  });

  it('should be an instance of Hydration', () => {
    expect(hydration).to.be.an.instanceof(Hydration);
  });
  
  it('should be able to get data from an id', () => {
    let user2Data = [
      hydrationData[0],
      hydrationData[1],
      hydrationData[2],
      hydrationData[3],
      hydrationData[4],
      hydrationData[5],
      hydrationData[7],
      hydrationData[9]
    ]
    expect(hydration.data).to.deep.equal(user2Data);
  });

  it('should be able to get average Fl Oz per day for all-time', () => {
    let result = hydration.getAverageFlOzPerDay()
    expect(result).to.deep.equal(69.5);
  });

  it('should be able to get fl oz drank on a specific day', () => {
    let result = hydration.getFlOzOnDate("2019/06/15");
    expect(result).to.deep.equal(75);
  });

  it('should be able to find one week of numOunces', () => {
    let result = hydration.getOzForPreviousSevenDays("2019/06/15");
    expect(result).to.deep.equal([50, 70, 65, 60, 75, 79, 75]);
  });
});
