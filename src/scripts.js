const userRepository = new UserRepository(userData);
const user = new User(userRepository.getUserData(1));
const hydration = new Hydration(1, hydrationData);
const sleepRepository = new SleepRepository(sleepData);
const activityRepository = new ActivityRepository(activityData);
const currentSleepUser = createCurrentUser(1, sleepRepository, Sleep);
const currentActivityUser = createCurrentUser(1, activityRepository, Activity);

const userNameNav = document.querySelector('.user-name-nav');
const userInfoCard = document.querySelector('#user-info-card');
const HydrationWeeklyGraph = document.querySelector('#hydration-weekly-graph');
const hydrationDaily = document.querySelector('.hydration-daily-top');
const sleepDaily = document.querySelector('.sleep-daily-top');
const sleepWeeklyGraph = document.querySelector('.sleep-weekly-graph');
const sleepAverage = document.querySelector('#sleep-average');

window.addEventListener('load', function() {
  generateRepositoryData();
  updateHTML("2019/06/22");
});

function generateRepositoryData() {
  getDataOrganizedByUser(sleepRepository);
  generateFromRepository(sleepRepository, Sleep);
  getDataOrganizedByUser(activityRepository);
  generateFromRepository(activityRepository, Activity);
}

function updateHTML(date) {
  userInfoUpdateHTML();
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

function userInfoUpdateHTML() {
  userNameNav.innerHTML = `<p>Welcome ${user.getFirstName()}!</p>`
  userInfoCard.innerHTML = `<div class="card-image">
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