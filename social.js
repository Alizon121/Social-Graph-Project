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

  //  if the follow was successful, return true
  // The graph is unidirectional (e.g. instagram)

if (this.users[userID1] && this.users[userID2]) { // we can directly verify whether the user exists with the idnex (e.g.[userID1])
  this.follows[userID1].add(userID2)
  return true
}
else return false
  }

  getFollows(userID) {
    // return a set contianing all the IDs of the users that the users follows
  return this.follows[userID]
  }

  getFollowers(userID) {
    // return set containing all followers of userID
    // Who follows userID?

return console.log(userID)
  
  }

  getRecommendedFollows(userID, degrees) {
    // Your code here 
  }
}

module.exports = SocialNetwork;
