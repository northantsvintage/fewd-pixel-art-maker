//values
const inputHeight = $('#input_height');
const inputWidth = $('#input_width');
const pixelCanvas = $('#pixel_canvas');
const colorPicker = $('#colorPicker');
let html;


function makeGrid(x, y) {
    //start making the heading of the table
    html = '<thead><tr></tr></thead><tbody>';

    //while grid height is larger then 0
    let i = 0;
    while (i < x) {
        //continue populating it with row
        html += '<tr>';

        //width is larger then 0
        //populate rows with cells
        for (let j = 0; j < y; ++j) {
            html += '<td></td>';
        }

        html += '</tr>';
        ++i;
    }

    html += '</tbody>';

    //append html to table
    $(html).appendTo(pixelCanvas);
}

// When the values are submited, execute this
$('#sizePicker').submit(function(e) {
    //prevent default browsers behaviour
    e.preventDefault();

    //get the values of inpu fields
    let height = inputHeight.val();
    let width = inputWidth.val();

    //if the table is drawn empty it
    pixelCanvas.empty();

    //then make the grid of table
    makeGrid(height, width);

    //when clicked on cell, colour it
    $('td').mouseover(function() {
        //pick the colours value
        let colorPicked = colorPicker.val();

        //assign colour to the table cell
        $(this).css('background-color', colorPicked);
    });

});