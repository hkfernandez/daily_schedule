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
        $(time).attr("class", "hour col-1");
        $(timeSlot).append(time);

        var eventInput = $("<input>").attr("id","eventInput"+[i]);
        $(eventInput).val(events[i]);
        console.log(events[i]);
        if (currentHour > i) {
            $(eventInput).attr("class", "textarea past col-10");
        } else if (currentHour < i) {
            $(eventInput).attr("class", "textarea future col-10");
        } else {
            $(eventInput).attr("class", "textarea present col-10");
        }
        $(timeSlot).append(eventInput);

        var saveBtn = $("<button>").attr("id",[i]);
        $(saveBtn).text("Save");
        $(saveBtn).attr("class", "saveBtn col-1");
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
    var selectedInput = $(this).prev();
    var inputText = $(selectedInput).val();
    var events = pullLocalStorageEvents();
    events[btnId] = inputText;
    pushLocalStorageEvents(events);
});
