// This will get the current date from moment.js in Day, Month, Day of the Month format.
const DayToday = moment().format('dddd, MMMM Do');

// This will display the current day on the main page.
const displayday = document.getElementById('currentDay');
displayday.innerHTML = DayToday;

// This array holds all of the hours that will display.
const hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

// This will get the current hour from moment.js.
const nowTime = moment().format('HH')

// Main Container for the planner.
const container = $('#main-planner');

// This forEach loop will create a timeblock for all the hours.
hours.forEach(function (hour){
    // This will create the row for the hour blocks.
    const rowDiv = $('<form>');

    rowDiv.addClass('row time-block');

    // This will create the hour container
    const hourDiv = $('<div>');
    hourDiv.attr('id', 'hour-' + hour);

    const currentHour = hour === 12 ? 12 : hour % 12;
    const amOrPm = (hour > 11) ? 'PM' : 'AM';

    hourDiv.text(currentHour + '' + amOrPm);
    hourDiv.addClass('col-3 hour');

    rowDiv.append(hourDiv);
    // This will create the input container that will hold the text area.
    const inputDiv = $('<textarea>');
    inputDiv.attr('class', 'plannerText')
    if ( hour < nowTime){
        inputDiv.addClass('col-8 description past');}
    else if ( hour > nowTime){
        inputDiv.addClass('col-8 description future');
    }
    else {
        inputDiv.addClass('col-8 description present');}
    
    rowDiv.append(inputDiv)
    // This will create the save button for each of the hour blocks.
    var saveBtnDiv = $('<button>');
    saveBtnDiv.attr('class', 'fa fa-save');
    saveBtnDiv.addClass('col-1 saveBtn');

    rowDiv.append(saveBtnDiv);
 
    container.append(rowDiv);

    $('.saveBtn').on('click', function(event){
        event.preventDefault();
        console.log("I've been clicked!");
    
        var Stuff = $('.plannerText').val();
    
        localStorage.setItem('plannerStorage', JSON.stringify(Stuff));
        console.log(localStorage)
    });

})



    // $('.saveBtn').on('click', function(){
    //     event.preventDefault();
    //     console.log("I've been clicked!");

    //     var Stuff = document.querySelector('#plannerText').value;
    
    //     localStorage.setItem('plannerStuff', Stuff);
    //     console.log(localStorage)

    // })