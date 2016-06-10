  var express = require('express');
var router = express.Router();

router.use(function (req, res, next) {

 // Store common vars

 res.locals.formData = "";
 res.locals.formQuery = "?";
 res.locals.data = {};

 for (var name in req.query){
   var value = req.query[name];
   res.locals.formData += '<input type="hidden" name="'+name+'" value="' + value + '">\n';
   res.locals.formQuery += name + "=" + value + "&";
   res.locals.data[name] = value;
 }

 res.locals.formQuery = res.locals.formQuery.slice(0,-1);

 next();
 
});

router.get('/', function (req, res) {
  res.render('index');

});


// Branching

// Question for questions/country/index.html

router.get('/questions/age', function (req, res) {

  console.log("WHAT");

  // get the answer from the query string (eg. ?over18="yes")
  var country = req.query.country;

  if (country == "northern_ireland" ){

    // if user lives in Scotland
    res.redirect("/questions/result" + res.locals.formQuery);

  } else if (country == "scotland" ){

    // if user lives in Scotland
    res.redirect("/questions/result" + res.locals.formQuery);

  } else {

    // if users is NOT using scaffolding
    res.render('questions/age/index.html');

  }

});

// Question for questions/age/index.html

router.get('/questions/criminal_history', function (req, res) {

  console.log("WHAT");

  // get the answer from the query string (eg. ?over18="yes")
  var over18 = req.query.over18;

  if (over18 == "no" ){

    // if users IS using scaffolding
    res.redirect("/questions/result" + res.locals.formQuery);

  } else {

    // if users is NOT using scaffolding
    res.render('questions/criminal_history/index.html');

  }

});

// Question for questions/criminal_history/index.html

router.get('/questions/prohibited_weapons', function (req, res) {

  console.log("WHAT");

  // get the answer from the query string (eg. ?over18="yes")
  var prison = req.query.prison;

  if (prison == "yes" ){

    // if users IS using scaffolding
    res.redirect("/questions/result" + res.locals.formQuery);

  } else {

    // if users is NOT using scaffolding
    res.render('questions/prohibited_weapons/index.html');

  }

});


// Question for questions/criminal_history/index.html

router.get('/questions/age', function (req, res) {

  console.log("WHAT");

  // get the answer from the query string (eg. ?over18="yes")
  var prison = req.query.prison;

  if (prison == "yes" ){

    // if users IS using scaffolding
    res.redirect("/questions/result" + res.locals.formQuery);

  } else {

    // if users is NOT using scaffolding
    res.render('questions/age/index.html');

  }

});

// Question for questions/prohibited_weapons/index.html

router.get('/questions/air_weapon', function (req, res) {

  console.log("WHAT");

  // get the answer from the query string (eg. ?over18="yes")
  var prohibited_weapons = req.query.prohibited_weapons;

  if (prohibited_weapons == "yes" ){

    // if users IS using scaffolding
    res.redirect("/questions/result" + res.locals.formQuery);

  } else {

    // if users is NOT using scaffolding
    res.render('questions/air_weapon/index.html');

  }

});

// Question for qustions/shotguns/index.html

router.get('/questions/visitors', function (req, res) {

  console.log("WHAT");

  // get the answer from the query string (eg. ?scaffolding=1)
  var shotguns = req.query.shotguns;
  var types_of_shotgun = req.query.types_of_shotgun;

  if (shotguns == "yes" && types_of_shotgun==undefined){

    // if users IS using scaffolding
    res.redirect("/questions/shotguns/types_of_shotgun" + res.locals.formQuery);

} else {

    // if users is NOT using scaffolding
    res.render('questions/visitors/index.html');

  }

});

// Question for qustions/visitors/index.html
router.get('/questions/result', function (req, res) {

  console.log("WHAT");

  // get the answer from the query string (eg. ?scaffolding=1)
  var visitors = req.query.visitors;
  var number_of_visitors = req.query.number_of_visitors;

  if (visitors == "yes" && number_of_visitors==undefined){

    // if users IS using scaffolding
    res.redirect("/questions/visitors/number_of_visitors" + res.locals.formQuery);

} else {

    // if users is NOT using scaffolding
    res.render('questions/result/index.html');

  }

});

module.exports = router;
