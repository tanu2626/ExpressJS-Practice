var express = require("express");
// make a app variableto set up our routes
var app = express();

//make routes
app.get("/", function(req, res) {
  res.send("Hi there");
});


app.get("/speak/:animal", function(req, res) {
  var sounds = {
    pig: "oink",
    cow: "Moo",
    dog: "woof woof",
    cat: "meow",
    goldfish: "..."
  }
  var animal = req.params.animal.toLowerCase();
  var sound = sounds[animal];
  res.send("The " + animal + " says " + sound);
});

app.get("/repeat/:message/:times", function(req, res) {
  var message = req.params.message;
  var times = Number(req.params.times);
  var result = "";

  for(var i = 0; i < times; i++){
    result += message + " ";
  }
  res.send(result);
});

//catch out error page
app.get("*", function(req, res) {
  res.send("Sorry page not found, what are you doing with your life?");
});


// tell express to listen for requests, we use this command

app.listen(3000, function() {
  console.log('Listening on port 3000!');
});
