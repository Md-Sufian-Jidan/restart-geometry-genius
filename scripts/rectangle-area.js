function calculateRectangleArea () {

    // get the rectangle width
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidth = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidth);
    // console.log(width);

    // get the rectangle length
    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLength = rectangleLengthInput.value;
    const length = parseFloat(rectangleLength);
    // console.log(length);

    // display the rectangle area
    const area = width * length;
    console.log('Area of the rectangle is ', area);
    const areaField = document.getElementById('rectangle-area');
    areaField.innerText = area;
}

// rectangle-width
// rectangle-length