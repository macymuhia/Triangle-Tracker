function validateResult() {
    var response = [];

    var firstSide = parseFloat(document.getElementById("first-side").value);
    var secondSide = parseFloat(document.getElementById("second-side").value);
    var thirdSide = parseFloat(document.getElementById("third-side").value);

    if (firstSide && secondSide && thirdSide) {
        response.push(firstSide, secondSide, thirdSide);
        if (response[0] === response[1] &&
            response[1] === response[2] &&
            response[2] === response[0]) {
            alert("you have an equilateral triangle");
        } else if (response[0] === response[1] &&
            response[1] !== response[2]) {
            alert("You have an isosceles triangle");
        } else if (response[0] !== response[1] &&
            response[1] === response[2]) {
            alert("You have an isosceles triangle");
        } else if (response[0] !== response[1] &&
            response[2] === response[0]) {
            alert("You have an isosceles triangle");
        } else {
            alert("Those dimentions cannot form a triangle");
        }
    } else {
        alert("Kindly input three dimensions");
    }
}

function dimensionLogic() {
    if (response[0] + response[1] > response[2] || response[1] + response[2] > response[0] || response[2] + response[0] > response[1]) {
        alert("Those dimentions cannot form a triangle");
    } else {
        triangleName();
    }

}