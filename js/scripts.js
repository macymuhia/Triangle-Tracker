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
            alert("Not an equilateral or isosceles triangle");
        }
    } else {
        alert("Kindly add three dimensions");
    }
}