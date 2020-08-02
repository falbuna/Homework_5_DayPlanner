const nowDay = moment().format('dddd, MMMM Do');

const displayday = document.getElementById('currentDay');
displayday.innerHTML = nowDay;

const hours = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];

const container = $('#main-planner');

hours.forEach(function (hour){

    const rowDiv = $('<div>');

    rowDiv.addClass('row time-block');

    const hourDiv = $('<div>');
    hourDiv.attr('id');
    hourDiv.text(hour);
    hourDiv.addClass('col-md-3 hour')

    rowDiv.append(hourDiv);

    const inputDiv = $('<form>');
    inputDiv.addClass('col-md-8 past')

    rowDiv.append(inputDiv)

    const saveBtnDiv = $('<button>');
    saveBtnDiv.addClass('col-md-1 saveBtn');

    rowDiv.append(saveBtnDiv);
 
    container.append(rowDiv);
})

