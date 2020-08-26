const chai = require('chai');
const expect = chai.expect;

const Hydration = require('../src/Hydration');

describe('Hydration', () => {
  let hydrationData;
  let hydration;
  
  beforeEach(() => {
    hydrationData = [
      {
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
    hydration = new Hydration(2)
  });

  it('should be a function', () => {
    expect(Hydration).to.be.a('function');
  });

  it('should be an instance of UserRepository', () => {
    expect(hydration).to.be.an.instanceof(Hydration);
  });
  
  it('should be able to get data from an id', () => {
    hydration.getDataFromId(hydrationData)
    expect(hydration.data).to.deep.equal([hydrationData[1],hydrationData[3]]);
  });

  it('should be able to get data from an id', () => {
    hydration.getDataFromId(hydrationData)
    let result = hydration.getAverageFlOzPerDay()
    expect(result).to.deep.equal(78.5);
  });

});