let userRepository = new UserRepository(userData);
let user = new User(userRepository.getUserData(1));
let hydration = new Hydration(1, hydrationData)

let userNameNav = document.querySelector('.user-name-nav')
let userInfoCard = document.querySelector('#user-info-card');
let HydrationWeeklyGraph = document.querySelector('#hydration-weekly-graph')
let hydrationDaily = document.querySelector('.hydration-daily-top')

window.addEventListener('load', function() {
  userInfoUpdateHTML();
  updateHydrationWeekHTML("2019/06/22");
  updateHydrationDayHTML("2019/06/22");
});

function userInfoUpdateHTML() {
  userNameNav.innerHTML = `<p>Welcome ${user.getFirstName()}!</p>`
  userInfoCard.innerHTML = `<div class="container">
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

