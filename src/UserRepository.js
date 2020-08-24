class UserRepository {
  constructor(users) {
    this.users = users;
  }

  getUserData(id) {
    let userData = this.users.filter(user => {
      return user.id === id;
    });
    return userData[0];
  }
}

module.exports = UserRepository;