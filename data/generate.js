
//Generates fake hunt data
//node data/generate.js > data/hunts.json
//mongoimport -d scour -c hunts --drop data/hunts.json 
//
var moment = require('moment');

var cities = [{
  city: "Seattle",
  state: "WA",
  image: "seattle.jpg"
}, {
  city: "Chicago",
  state: "IL",
  image: "chicago.jpg"
}, {
  city: "Los Angeles",
  state: "CA",
  image: "losangeles.jpg"
}, {
  city: "New York",
  state: "NY",
  image: "newyork.jpg"
}, {
  city: "Boston",
  state: "MA",
  image: "boston.jpg"
}];

var suffixes = ["Hunt", "Search", "Quest"];

var costs = [5,10,15,20,25];

var prizes = [];

var registrationLimits = [100, 125, 150, 175, 200, 225, 250, 275, 300];


var Hunt = function() {

  var hunt = {};

  var getRandomElem = function(arr) {
    return arr[getRandomInt(0,arr.length-1)];
  };
  var getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  var getRandomDateAtLeastFourtyDaysFromNow = function(){
    return moment().add('days',40).add('days', getRandomInt(0,365)).hour(getRandomInt(18,20)).minute(0).second(0).millisecond(0);
  };

  var city = getRandomElem(cities);
  var suffix = getRandomElem(suffixes);
  var date = getRandomDateAtLeastFourtyDaysFromNow();
  hunt.name = city.city + " " + suffix;
  hunt.date = date.toISOString();
  hunt.location = { city: city.city, state: city.state, image: "/images/" + city.image};
  hunt.sponsors = ["Scour"];
  hunt.registration_cost = getRandomElem(costs);
  hunt.prizes = [{
    prize : "",
    clues : [{}]
  }];
  hunt.registrant_limit = getRandomElem(registrationLimits);
  hunt.registrant_count = getRandomInt(30,hunt.registrant_limit);
  hunt.registration_start_time = date.subtract('days',30).toISOString();
  hunt.status = "";
  return hunt;
};

for(var i =0; i< 30; i++){
  console.log(JSON.stringify(Hunt()));
}

/*
{
  name: "Seattle Hunt",
  date: new Date(),
  location: {
    city: "Seattle",
    state: "WA",
  },
  sponsors: ["codefellows", "scour"],
  registration_cost: 30,
  prizes: [{
    prize: "codefellows tuition",
    clues: [{
      type: "image",
      content: "no image"
    }],
    rank: 1
  }],
  registrant_count: 100,
  registrant_limit: 120,
  registration_start_time: new Date(),
  status: "started"
}
*/
