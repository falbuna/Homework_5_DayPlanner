const nowDay = moment().format('dddd, MMMM Do');

const displayday = document.getElementById('currentDay');
displayday.innerHTML = nowDay;

const hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

const nowTime = moment().format('h')

const container = $('#main-planner');

hours.forEach(function (hour){

    const rowDiv = $('<div>');

    rowDiv.addClass('row time-block');

    const hourDiv = $('<div>');
    hourDiv.attr('id', 'hour-' + hour);

    const currentHour = hour === 12 ? 12 : hour % 12;
    const amOrPm = (hour > 11) ? 'PM' : 'AM';

    hourDiv.text(currentHour + '' + amOrPm);
    hourDiv.addClass('col-md-3 hour');

    rowDiv.append(hourDiv);

    const inputDiv = $('<textarea>');
    if ( hour < nowTime){
        inputDiv.addClass('col-md-8 description past');}
    else if ( hour > nowTime){
        inputDiv.addClass('col-md-8 description future');
    }
    else {
        inputDiv.addClass('col-md-8 description present');}
    
    rowDiv.append(inputDiv)

    const saveBtnDiv = $('<button>');
    saveBtnDiv.attr('class', 'fa fa-save');
    saveBtnDiv.addClass('col-md-1 saveBtn');

    rowDiv.append(saveBtnDiv);
 
    container.append(rowDiv);
})

