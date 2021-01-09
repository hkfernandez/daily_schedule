/* 
assign id to the main container  - hoursInTheDay

loop to generate time slots
    time slots will contain a time, an event and a save button

pull values from local storage when loading 
    if they don't exist
        create an object
        loop to populate with time slot value keys
        JSON.strigify and save time keys with blank values to local storage 
    if the do exit
        JSON.parse and loop through time slots to populate events with existing values
add an event listener to the save button to save event value to local storage
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

var currentHour = dayjs ().format('HH');

