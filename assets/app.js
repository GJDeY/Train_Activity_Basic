event.preventDefault();

var defaultDatabase = firebase.database();

var firstTrain = "05:00";
var freq = "01:00";
var currentTime = moment();
document.write("CURRENT TIME: " + moment(currentTime).format("hh:mm"));


document.write(moment().format("DD/MM/YY hh:mm A"));



//bonus
//setInterval(function() console.log("nextTrain"));