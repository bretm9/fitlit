let userRepository = new UserRepository(userData);
let user = new User(userRepository.getUserData(1));

let userInfoCard = document.querySelector('#user-info-card');
console.log(userInfoCard);
window.addEventListener('load', userInfoUpdate);

function userInfoUpdate() {
  userInfoCard.innerHTML = `<div class="container">
    <h4><b>${user.getFirstName()}</b></h4>
    <p>${user.address}</p>
    <p>${user.email}</p>
    <p>${user.strideLength}</p>
    <p>${user.dailyStepGoal}</p>
  </div>`
}