// rtEmN (`#...${}`)

function getLocalStorage(key) {
    let value = localStorage.getItem(key);
    if (value) {
        $(`#text${key}`).text(value);
    }
}

$(document).ready(function() {
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    for (let i = 9; i < 18; i++) {
    
        var row = $(`<div data-time=${i} id='${i}' class="row">`);

        // HOUR column
        var colHour = $('<div class="col-sm-2"> <p class="hour">' + formatAMPM(i) + '</p>');

        // EVENT column
        var colEvent = $(`<div class="col-sm-8 past"><textarea id=text${i} class="event" placeholder="+"></textarea>`);        
       
        // SAVE column
        var colSave = $(`<div class="col-sm-2"><button class="saveBtn" id=${i}><i class="fas fa-save"></i></button>`)
        
        row.append(colHour);
        row.append(colEvent);
        row.append(colSave);

        $(".container").append(row);

        getLocalStorage(i);
    }

    function formatAMPM(hours) {
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        return hours + ampm;
    }
formatAMPM();

function updateColors(){
        var currentTime = new Date().getHours();
        for (var i = 9; i < 18; i++) { 
        console.log(currentTime, $(`#${i}`).data("time"));
         if ($(`#${i}`).data("time") == currentTime){
            $(`#text${i}`).addClass( "present");
        } else if (currentTime < $(`#${i}`).data("time")) {
            $(`#text${i}`).addClass( "future");
        }
    }
}

// execute function multiple times at time intervals (1000ms = 1second)
setInterval(function() {
    updateColors();
}, 1000);

var saveBtn = $('.saveBtn');
saveBtn.on('click', function(){
    let eventId = $(this).attr('id');
    let eventText = $(this).parent().siblings().children('.event').val();
    localStorage.setItem(eventId, eventText);
});});