const userRepository = new UserRepository(userData);
const user = new User(userRepository.getUserData(1));
const hydration = new Hydration(1, hydrationData);
const sleepRepository = new SleepRepository(sleepData);
const activityRepository = new ActivityRepository(activityData);
const currentSleepUser = createCurrentUser(1, sleepRepository, Sleep);
const currentActivityUser = createCurrentUser(1, activityRepository, Activity);
let weeklyActivityGraphStorage = {}

const userNameNav = document.querySelector('.user-name-nav');
const userInfoCard = document.querySelector('#user-info-card');
const HydrationWeeklyGraph = document.querySelector('#hydration-weekly-graph');
const hydrationDaily = document.querySelector('.hydration-daily-top');
const sleepDaily = document.querySelector('.sleep-daily-top');
const sleepWeeklyGraph = document.querySelector('.sleep-weekly-graph');
const sleepAverage = document.querySelector('#sleep-average');
const activityDaily = document.querySelector('#activity-daily-aux');
const activityWeekly = document.querySelector('#weekly-activity-aux');
const activityWeeklyGraphContainer = document.querySelector('.activity-weekly-graph-container');
const weeklyActivityGraph = document.getElementById('weekly-activity-graph').getContext('2d');

window.addEventListener('load', function() {
  generateRepositoryData();
  updateHTML("2019/06/22");
});

function generateRepositoryData() {
  getDataOrganizedByUser(sleepRepository);
  generateFromRepository(sleepRepository, Sleep);
  getDataOrganizedByUser(activityRepository);
  generateFromRepository(activityRepository, Activity);
  addStepGoalMet()
}

function updateHTML(date) {
  userInfoUpdateHTML();
  updateActivityDayHTML(date);
  updateActivityWeekHTML(date);
  updateHydrationWeekHTML(date);
  updateHydrationDayHTML(date);
  updateSleepDayHTML(date);
  updateSleepWeekHTML(date);
  updateSleepAverageHTML();
}

function getDataOrganizedByUser(repository) {
  let organizedData = repository.data.reduce((allUsers, instance) => {
    if (!allUsers[`user${instance.userID}`]) {
      allUsers[`user${instance.userID}`] = [];
    }
    allUsers[`user${instance.userID}`].push(instance);
    return allUsers;
  }, {});
  repository.organizedData = organizedData;
}

function generateFromRepository(repository, classType) {
  let arrayOfUsers = Object.values(repository.organizedData)
  repository.users = arrayOfUsers.map((user, index) => {
    return new classType((index + 1), user);
  });
}

function createCurrentUser(id, repository, classType) {
  let userData = repository.data.filter(instance => instance.userID === id)
  return new classType(id, userData);
}

function addStepGoalMet() {
  currentActivityUser.data.forEach(day => {
    if (day.numSteps >= user.dailyStepGoal) {
      day.stepGoalMet = "Yes!";
    } else {
      day.stepGoalMet = "Not yet";
    }
  });
}

function userInfoUpdateHTML() {
  userNameNav.innerHTML = `<h1>Welcome ${user.getFirstName()}!</h1>`
  userInfoCard.innerHTML = `<div class="card-text">
    <h4><b>${user.getFirstName()}'s info</b></h4>
    <p>${user.address}</p>
    <p>${user.email}</p>
    <p>Stride length: ${user.strideLength}</p>
    <p>Your goal is: ${user.dailyStepGoal}</p>
    <p>Global average goal: ${userRepository.getAverageStepGoals()}</p>
  </div>`
}

function updateHydrationWeekHTML(day) {
  let hydrationWeek = hydration.getOzForPreviousSevenDays(day);
  hydrationWeek.map((day, i) => {
    HydrationWeeklyGraph.insertAdjacentHTML('beforeend', `<p>Date: ${day.date}, Oz Drank: ${hydrationWeek[i].numOunces} oz</p>`)
  });
}

function updateHydrationDayHTML(day) {
  hydrationDaily.innerHTML = `<p>Today - ${hydration.getCurrentDayHydration(day).numOunces} oz</p>`
}

function updateSleepDayHTML(date) {
  let sleepToday = currentSleepUser.getCurrentDaySleepInfo(date);
  sleepDaily.innerHTML = `Today - Hours slept: ${sleepToday.hoursSlept}, Sleep Quality: ${sleepToday.sleepQuality}`;
}

function updateSleepWeekHTML(date) {
  let sleepThisWeek = currentSleepUser.getSleepInfoForPreviousSevenDays(date);
  sleepThisWeek.map(sleepDay => {
    sleepWeeklyGraph.insertAdjacentHTML('beforeend', `<p>${sleepDay.date}: - Hours slept: ${sleepDay.hoursSlept}, Sleep Quality: ${sleepDay.sleepQuality}</p>`)
  });
}

function updateSleepAverageHTML() {
  sleepAverage.insertAdjacentHTML(
    'beforeend', `<p>sleep quality: ${currentSleepUser.getAveragePerDay("hoursSlept")}</p>
    <p>average hours: ${currentSleepUser.getAveragePerDay("sleepQuality")}</p>`
  );
}

function updateActivityDayHTML(date) {
  let activityToday = currentActivityUser.getCurrentDayActivityInfo(date);
  let milesWalked = ((activityToday.numSteps * user.strideLength) / 5280).toFixed(1);
  let glabalAverageNumSteps = activityRepository.getAverageActivity(date, "numSteps");
  let glabalAverageMinutesActive = activityRepository.getAverageActivity(date, "minutesActive");
  let glabalAverageFlightsOfStairs = activityRepository.getAverageActivity(date, "flightsOfStairs");
  activityDaily.insertAdjacentHTML(
    'beforeend', `<h2>Your Activity Today:</h2>
    <p>Step Goal Met: ${activityToday.stepGoalMet}, Steps: ${activityToday.numSteps}, Minutes Active: ${activityToday.minutesActive}, Flights Of Stairs: ${activityToday.flightsOfStairs}, Miles Walked: ${milesWalked}</p>
    <h2>Global Average Today:</h2>
    <p>Steps: ${glabalAverageNumSteps}, Minutes Active: ${glabalAverageMinutesActive}, flights Of Stairs: ${glabalAverageFlightsOfStairs}</p>`
  );
}

function updateActivityWeekHTML(date) {
  let activityForWeek = currentActivityUser.getActivityInfoForPreviousSevenDays(date);
  activityForWeek.map(day => {
    activityWeekly.insertAdjacentHTML('beforeend', `<p>${day.date}: - minutesActive: ${day.minutesActive}, flights of stairs: ${day.flightsOfStairs}</p>`)
  });
  weeklyActivityGraphStorage = new Chart(weeklyActivityGraph, {
     type: 'line',
     data: {
         labels: [activityForWeek[0].date, activityForWeek[1].date, activityForWeek[2].date, activityForWeek[3].date, activityForWeek[4].date, activityForWeek[5].date, activityForWeek[6].date],
         datasets: [{
             label: 'My Steps',
             data: [activityForWeek[0].numSteps, activityForWeek[1].numSteps, activityForWeek[2].numSteps, activityForWeek[3].numSteps, activityForWeek[4].numSteps, activityForWeek[5].numSteps, activityForWeek[6].numSteps],
             backgroundColor: [
                 'rgba(255, 159, 64, 0.2)',
                 'rgba(255, 159, 64, 0.2)',
                 'rgba(255, 159, 64, 0.2)',
                 'rgba(255, 159, 64, 0.2)',
                 'rgba(255, 159, 64, 0.2)',
                 'rgba(255, 159, 64, 0.2)',
                 'rgba(255, 159, 64, 0.2)'
             ],
             borderColor: [
                 'rgba(255, 159, 64, 1)',
                 'rgba(255, 159, 64, 1)',
                 'rgba(255, 159, 64, 1)',
                 'rgba(255, 159, 64, 1)',
                 'rgba(255, 159, 64, 1)',
                 'rgba(255, 159, 64, 1)',
                 'rgba(255, 159, 64, 1)'
             ],
             borderWidth: 1
         }]
     },
     options: {
         scales: {
             yAxes: [{
                 ticks: {
                     beginAtZero: true
                 }
             }]
         }
     }
  });
}
