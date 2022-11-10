function calculate_area(side1, side2, side3)
{
    var side = (Number(side1) + Number(side2) + Number(side3)) / 2;
    document.getElementById("result").innerHTML = Math.sqrt(side * ((side - Number(side1)) * (side - Number(side2)) * (side - Number(side3))));

}