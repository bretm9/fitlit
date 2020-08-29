let userRepository = new UserRepository(userData);
let user = new User(userRepository.getUserData(1));
let hydration = new Hydration(1, hydrationData)

let userNameNav = document.querySelector('.user-name-nav')
let userInfoCard = document.querySelector('#user-info-card');
let HydrationWeeklyGraph = document.querySelector('#hydration-weekly-graph')

window.addEventListener('load', function() {
  userInfoUpdateHTML();
  updateHydrationHTML();
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

function updateHydrationHTML() {
  let hydrationWeek = hydration.getOzForPreviousSevenDays();
  HydrationWeeklyGraph.innerHTML = `<h3>Yo waddup</h3>
  <p>Day1: ${hydrationWeek[0]} oz</p>
  <p>Day2: ${hydrationWeek[1]} oz</p>
  <p>Day3: ${hydrationWeek[2]} oz</p>
  <p>Day4: ${hydrationWeek[3]} oz</p>
  <p>Day5: ${hydrationWeek[4]} oz</p>
  <p>Day6: ${hydrationWeek[5]} oz</p>
  <p>Day7: ${hydrationWeek[6]} oz</p>`
}