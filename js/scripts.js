var response = [];

function validateResult() {
    var firstSide = parseFloat(document.getElementById("first-side").value);
    var secondSide = parseFloat(document.getElementById("second-side").value);
    var thirdSide = parseFloat(document.getElementById("third-side").value);

    if (firstSide && secondSide && thirdSide) {
        response.push(firstSide, secondSide, thirdSide);
        dimensionLogic();

    } else {
        alert("Kindly input three dimensions");
    }
}

function triangleName() {
    if (response[0] === response[1] &&
        response[1] === response[2]) {
        alert("You have an equilateral triangle");
    } else if ((response[0] === response[1] && response[1] !== response[2]) ||
        (response[0] !== response[1] && response[1] === response[2]) ||
        (response[0] !== response[1] && response[2] === response[0])) {
        alert("You have an isosceles triangle");
    } else {
        alert("You have a scarlene triangle");
    }

    response = [];

}

function dimensionLogic() {
    if (response[0] + response[1] <= response[2] ||
        response[1] + response[2] <= response[0] ||
        response[2] + response[0] <= response[1]) {
        alert("Those dimensions cannot form a triangle");
    } else {
        triangleName();
    }

}