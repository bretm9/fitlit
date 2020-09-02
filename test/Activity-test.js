const chai = require('chai');
const expect = chai.expect;

const Activity = require('../src/Activity');

describe('Activity', () => {
  let activityTestData;
  let activity;
  
  beforeEach(() => {
    activityTestData = [
      {
        "userID": 1,
        "date": "2019/06/15",
        "numSteps": 3577,
        "minutesActive": 140,
        "flightsOfStairs": 16
      },
      {
        "userID": 1,
        "date": "2019/06/16",
        "numSteps": 4294,
        "minutesActive": 138,
        "flightsOfStairs": 10
      },
      {
        "userID": 1,
        "date": "2019/06/17",
        "numSteps": 7402,
        "minutesActive": 116,
        "flightsOfStairs": 33
      },
      {
        "userID": 1,
        "date": "2019/06/18",
        "numSteps": 3486,
        "minutesActive": 114,
        "flightsOfStairs": 32
      },
      {
        "userID": 1,
        "date": "2019/06/19",
        "numSteps": 11374,
        "minutesActive": 213,
        "flightsOfStairs": 13
      },
      {
        "userID": 1,
        "date": "2019/06/20",
        "numSteps": 14810,
        "minutesActive": 287,
        "flightsOfStairs": 18
      },
      {
        "userID": 1,
        "date": "2019/06/21",
        "numSteps": 2634,
        "minutesActive": 107,
        "flightsOfStairs": 5
      },
      {
        "userID": 1,
        "date": "2019/06/22",
        "numSteps": 10333,
        "minutesActive": 114,
        "flightsOfStairs": 31
      },
      {
        "userID": 1,
        "date": "2019/06/23",
        "numSteps": 6389,
        "minutesActive": 41,
        "flightsOfStairs": 33
      },
      {
        "userID": 1,
        "date": "2019/06/24",
        "numSteps": 8015,
        "minutesActive": 106,
        "flightsOfStairs": 37
      }
    ]

    activity = new Activity(1, activityTestData)
  });

  it('should be a function', () => {
    expect(Activity).to.be.a('function');
  });

  it('should be an instance of Activity', () => {
    expect(activity).to.be.an.instanceof(Activity);
  });
  
  it('should be able to get data from an id', () => {
    let user1Data = [
      activityTestData[0],
      activityTestData[1],
      activityTestData[2],
      activityTestData[3],
      activityTestData[4],
      activityTestData[5],
      activityTestData[6],
      activityTestData[7],
      activityTestData[8],
      activityTestData[9]
    ]
    expect(activity.data).to.deep.equal(user1Data);
  });

  it('should be able to get activity for a given day', () => {
    let result = activity.getCurrentDayActivityInfo("2019/06/19")
    expect(result).to.deep.equal(activityTestData[4]);
  });

  it('should be able to get a week worth of activity data', () => {
    let weekOfData = [
      activityTestData[2],
      activityTestData[3],
      activityTestData[4],
      activityTestData[5],
      activityTestData[6],
      activityTestData[7],
      activityTestData[8]
    ];
    let result = activity.getActivityInfoForPreviousSevenDays("2019/06/23")
    expect(result).to.deep.equal(weekOfData);
  });

  it('should be able to get average minutes active for a given week', () => {
    let result = activity.getAverageActivityForWeek("2019/06/23")
    expect(result).to.deep.equal(141);
  });

  it('should be able to get the user\'s all-time stair climing record', () => {
    let result = activity.getActivityRecord("flightsOfStairs")
    expect(result).to.deep.equal(37);
  });
});
