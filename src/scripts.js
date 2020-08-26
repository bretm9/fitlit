let userRepository = new UserRepository(userData);
let user = new User(userRepository.getUserData(1));

let userNameNav = document.querySelector('.user-name-nav')
let userInfoCard = document.querySelector('#user-info-card');

window.addEventListener('load', userInfoUpdate);

function userInfoUpdate() {
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
