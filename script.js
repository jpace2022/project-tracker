//nav bar with date and time
//section with data entry 
//list of project name, type hour rate, due date, days until due date, potential earnings
//popup window that asks for project name, project type, hourly rate, and due date
//pop up window should have close and submit project
//once project is submitted it should show up on screen
function displayTimeDate(){
var timeDate = moment().format("MMM Do, YYYY H:m:s a");
var timeDateDisplay = document.querySelector(".time-date");
timeDateDisplay.textContent = timeDate;
setTimeout(function(){
    displayTimeDate()
}, 1000) 
}
displayTimeDate()
