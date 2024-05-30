// Implement the SocialNetwork class here
class SocialNetwork {

  constructor() {
    this.users = {};
    this.follows = {};
    this.currentID = 0;
  }

  
  addUser(name) {
//     // Have the user object contain an ID and a name key
this.currentID++

let newUser = {
  "id" : this.currentID,
  "name" : name
}


this.users[this.currentID] = newUser
this.follows[this.currentID] = new Set()

// console.log(this.users)

return this.currentID

  }

  getUser(userID) {
    // if this.users contains the value, then return userID

    if (this.users[this.currentID] && this.users[this.currentID]['id'] === userID) {
    return this.users[this.currentID];
  } else {
    return null;
  }
  }

  follow(userID1, userID2) {
    // Your code here 
  }

  getFollows(userID) {
    // Your code here 
  }

  getFollowers(userID) {
    // Your code here 
  }

  getRecommendedFollows(userID, degrees) {
    // Your code here 
  }
}

module.exports = SocialNetwork;
