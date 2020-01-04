// Function will allow me to get all key values in localStorage in order to display all available data
function getLocalStorage(key) {
    let value = localStorage.getItem(key);
    if (value) {
        $(`#text${key}`).text(value);
    }
}
// Planner column & row creation code inside function will run once the page DOM is ready for JS
$(document).ready(function () {
    // Returns value of current day and adds to page as text in a specific format
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    for (let i = 9; i < 18; i++) {

        // Create a row
        var row = $(`<div data-time=${i} id='${i}' class="row">`);

        // Create a column: hour of the day
        var col1 = $('<div class="col-sm-2"> <p class="hour">' + formatAMPM(i) + '</p>');

        // Create a column: event to be created
        // Here are the elements to style: ".col-sm-8 past", ".textarea", ".description"
        var col2 = $(`<div class="col-sm-8 past"><textarea id=text${i} class="description" placeholder="Add your event here..."></textarea>`);

        //create a column: action (save)
        // Here is the element to style: ".saveBtn" 
        var col3 = $(`<div class="col-sm-2"><button class="saveBtn" id=${i}><i class="fas fa-save"></i></button>`)

        // Insert (append) content (column) at the end of every row
        row.append(col1);
        row.append(col2);
        row.append(col3);

        // Append content (rows) to the ".container" element
        // Here is element to style: ".container"
        $(".container").append(row);

        getLocalStorage(i);
    }
    // Function to display JavaScript datetime in 12 hour AM/PM format
    function formatAMPM(hours) {
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        return hours + ampm;
    }
    formatAMPM();

    //function to update event colors according to what time category (past, present, future) they qualify
    function updateColors() {
        var currentTime = new Date().getHours();
        for (var i = 9; i < 18; i++) {
            console.log(currentTime, $(`#${i}`).data("time"));
            // If it is the currentTime then the it will be an in the present event
            if ($(`#${i}`).data("time") == currentTime) {
                $(`#text${i}`).addClass("present");
            // Otherwise if will be considered to be a future event
            } else if (currentTime < $(`#${i}`).data("time")) {
                $(`#text${i}`).addClass("future");
            }
        }
    }
    // Need code to finish updating colors

    // Variable to save event
    var saveBtn = $('.saveBtn');

    // On the click of the saveBtn function will create and store the event
    saveBtn.on('click', function () {
        let eventId = $(this).attr('id');
        let eventText = $(this).parent().siblings().children('.description').val();
        localStorage.setItem(eventId, eventText);
    });
});