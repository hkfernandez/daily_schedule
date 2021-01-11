/* 
$ assign id to the main container  - hoursInTheDay

$ loop to generate time slots
    time slots will contain a time, an event and a save button
    loop 11 times to create values from 8 to 18
    create a div .&#timeslot[time]
    create a div and append to .timeslot[time]
        .#time - set text to time
        .# eventInput
        .# saveBtn

$pull values from local storage when loading 
    if they don't exist
        create an object
        loop to populate with time slot value keys
        JSON.strigify and save time keys with blank values to local storage 
    if the do exit
        JSON.parse and loop through time slots to populate events with existing values
$add an event listener to the save button to save event value to local storage
    retreieve the data object from local storage
    JSON.parse data to turn it into an object
    add the data to the correct time slot ksy
    JSON.stringify the object and push it back to local storage 
capture the time of day
use the time of day to update classes to modify event colors
    set interval for one minute to run a function
        if input attribute data-inputTime value > current time set class to afterCurrentTime
        if < currentTime set class to beforeCurrentTime
        else set to eventCurrentTime

*/

var mainDiv = $(".container");
var currentHour = dayjs ().format('HH');

function createTimeSlots (){
    var events = pullLocalStorageEvents();
    for (let i= 8; i < 19; i++) {
        var timeSlot = $("<div>").attr("id",[i]);
        $(timeSlot).attr("class", "row");
        $(mainDiv).append(timeSlot);
        
        var time = $("<span>").attr("id","time"+[i]);
        $(time).text([i]+":00");
        $(time).attr("class", "hour");
        $(timeSlot).append(time);

        var eventInput = $("<input>").attr("id","eventInput"+[i]);
        $(eventInput).val(events[i]);
        console.log(events[i]);
        $(eventInput).attr("class", "textarea");
        $(timeSlot).append(eventInput);

        var saveBtn = $("<button>").attr("id",[i]);
        $(saveBtn).text("Save");
        $(saveBtn).attr("class", "saveBtn");
        $(timeSlot).append(saveBtn);
    }
}
createTimeSlots();

function pullLocalStorageEvents (){
    var eventsObj = JSON.parse(localStorage.getItem("todaysEvents"));
    if (eventsObj == null){
        var eventsObj = {8:"", 9:"" ,10:"" ,11:"",12:"", 12:"", 13:"", 14:"", 15:"", 16:"", 17:"", 18:""};
    }
    return eventsObj;
}

function pushLocalStorageEvents (events){
    localStorage.setItem ("todaysEvents", JSON.stringify(events));
}

// event listener for save button
$(".saveBtn").on("click", function () {
    var btnId = $(this).attr("id");
    console.log(btnId);
    var selectedInput = $(this).prev();
    var inputText = $(selectedInput).val();
    var events = pullLocalStorageEvents();
    events[btnId] = inputText;
    pushLocalStorageEvents(events);
    console.log(events);
});




// test
// var events = pullLocalStorageEvents();
// pushLocalStorageEvents();
// var events = pullLocalStorageEvents();
// console.log(events);

