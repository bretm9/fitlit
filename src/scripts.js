let userRepository = new UserRepository(userData);
let user = new User(userRepository.getUserData(1));
let hydration = new Hydration(1, hydrationData);
let sleepRepository = new SleepRepository(sleepData);
let currentSleepUser = sleepRepository.createCurrentUser(1);

let userNameNav = document.querySelector('.user-name-nav');
let userInfoCard = document.querySelector('#user-info-card');
let HydrationWeeklyGraph = document.querySelector('#hydration-weekly-graph');
let hydrationDaily = document.querySelector('.hydration-daily-top');
let sleepDaily = document.querySelector('.sleep-daily-top');
let sleepWeeklyGraph = document.querySelector('.sleep-weekly-graph');
let sleepAverage = document.querySelector('#sleep-average');

window.addEventListener('load', function() {
  sleepRepository.getDataOrganizedByUser()
  generateSleepObjects(sleepRepository);
  userInfoUpdateHTML();
  updateHydrationWeekHTML("2019/06/22");
  updateHydrationDayHTML("2019/06/22");
  updateSleepDayHTML("2019/06/22");
  updateSleepWeekHTML("2019/06/22");
  updateSleepAverageHTML();
});

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

  function generateSleepObjects(sleepRepository) {
    let arrayOfUsers = Object.values(sleepRepository.organizedData)

    sleepRepository.users = arrayOfUsers.map((user, index) => {
      return new Sleep((index + 1), user);
    });
  }