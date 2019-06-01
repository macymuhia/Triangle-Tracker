function validateResult() {
    var firstSide = document.getElementById("first-side").value;
    var secondSide = document.getElementById("second-side").value;
    var thirdSide = document.getElementById("third-side").value;

    var response = [];

    if (firstSide && secondSide && thirdSide) {
        response.push(firstSide, secondSide, thirdSide);
        alert(response);
    } else {
        alert("Kindly add three dimensions");
    }






}