event.preventDefault();///prevents page from running script until i tell it to in a function
DateTime.local().setZone('America/New_York').minus({ weeks: 1 }).endOf('day').toISO();
var defaultDatabase = firebase.database();//linking my firebase project//or should it be ' var database = firebase.database '? 

var firstTrain = "05:00";
var freq = "01:00";
var Interval = "1:00"
var currentTime = moment();//?
document.write("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
timeIsCurrent === true;

document.write(moment().format("DD/MM/YY hh:mm A"));//not working!
//show/append rows and columns from firebase but it wont update into my page
//get current time from moment.js
//put the train data in rows and columns with jQuery
///the jQuery function for admins to add new train info would be  $("#new-train > body").append(newRow);



//bonus

//for intervals
//setInterval(function() console.log("nextTrain"));
///the jQuery function for admins to add new train info would be  $("#new-train > body").append(newRow);

