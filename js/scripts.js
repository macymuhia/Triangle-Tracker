function validateResult() {
    var firstSide = parseFloat(document.getElementById("first-side").value);
    var secondSide = parseFloat(document.getElementById("second-side").value);
    var thirdSide = parseFloat(document.getElementById("third-side").value);

    var response = [];

    if (firstSide && secondSide && thirdSide) {
        response.push(firstSide, secondSide, thirdSide);
        alert(response);
    } else {
        alert("Kindly add three dimensions");
    }
}