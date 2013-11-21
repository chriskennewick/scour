var Controller = {

  index: function() {
    console.log("/ hit");
  },
  showHunts: function() {
    console.log("/hunts hit");
  },
  showHunt: function(id) {
    console.log("/hunts/:id hit");
  },
  showWelcome: function() {
    console.log("/welcome hit");
  },
  showSignUp: function() {
    console.log("/signup hit");
  },
  showLogin: function() {
    console.log("/login hit");
  }
};


module.exports = Controller;
