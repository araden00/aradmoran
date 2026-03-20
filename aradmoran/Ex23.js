//targil1
function DrawnLink() {
    var link = document.createElement("a");
    link.setAttribute("href", "1.html");
    link.setAttribute("style", "color:red");
    link.innerText = "קישור לדף 1";
    el.appendChild(link);
}
/*Drawnlike();*/

//targil2
function DrawnImge() {
    var img1 = document.createElement("img");
    img1.setAttribute("src","ing/jpg.1.jpg");
    img1.setAttribute("width", "200");
    img1.setAttribute("height", "200")
    el.appendChild(img1);
}
/*DrawnImge();*/

//targil3
function DrawnImge3(imgindex) {
    
        var img1 = document.createElement("img");
        img1.setAttribute("src", "ing/jpg." + imgindex + ".jpg");
        img1.setAttribute("width", "200");
    img1.setAttribute("height", "200");
    return (img1);
        /*el.appendChild(img1);*/
    
}
//DrawnImge3();
//DrawnImge3();

//targil4
function DrawnImge4(imgindex,imghight,imgWidth,el) {
   
        var img1 = document.createElement("img");
        img1.setAttribute("src", "ing/jpg." + imgindex + ".jpg");
        img1.setAttribute("height", +imghight);
        img1.setAttribute("width", +imgWidth);
        el.appendChild(img1);
}
/*DrawnImge4()*/

//targil5
function DrawSomeImages(num) {
    for (var i = 1; i <= num; i++)
    {
        var div =DrawnImge3(i);   
        el.appendChild(div);
    }

}
/*DrawSomeImages(5)*/

//targil6
function Drawnlink6(linkIndex,el) {
    el.setAttribute("href", linkIndex + ".html");
    el.innerText = (linkIndex + "קישור לדף "); 
    el.setAttribute("style", "color:red;");
    var k = document.getElementById('el');
    k.appendChild(el);
}
function Drawsomelinks6() {
    for (var i = 1; i <= 5; i++) {
        var a = document.createElement('a')
        Drawnlink6(i, a);
    }
    
}
/*Drawsomelinks6();*/

////targil7 A
function DrawnRow(el,rowIndex, imgHeight, imgWidth) {
    var tablerow = document.createElement("tr");
    var tabledata1 = document.createElement("td");
    var tabledata2 = document.createElement("td");
    DrawnImge4(rowIndex, imgHeight, imgWidth, tabledata1);
    var a = document.createElement('a');
    Drawnlink6(rowIndex, tabledata2);
    tablerow.appendChild(tabledata1);
    tablerow.appendChild(tabledata2);
    el.appendChild(tablerow);
    
}
/*DrawnRow()*/



//targil7 B
function Drawntable(rows,el) {
    var table = document.createElement("table");
    for (var i = 1; i <= rows; i++) {

        var tr = DrawnRow(table, i, 200, 200);
    }
    var el = document.getElementById("el");
    el.appendChild(table);
}  
//Drawntable(4);
    
//targil8 
function SumTwoValues(x, y)
{
    var num = x + y
    return num;
}
function ShowSumTwoValues()
{
    var num1 = parseInt(prompt("enter first number"));
    var num2 = parseInt(prompt("enter second number"));
    var sum = SumTwoValues(num1, num2);
    alert("the sum is: " + sum);
}
/*ShowSumTwoValues();*/

//targil9
function IsEven(x)
{
    if (x % 2 == 0)
        return true;
}
function ShowIsEven()
{
    var num1 = parseInt(prompt("enter a number"));
    var even = IsEven(num1);
    if (even == true) {
        alert("the number is even");
    }
    else {
        alert("the number is odd");
    }
}
/*ShowIsEven();*/

//targil10
function IsAInEnd(str)
{
    if (str.charAt(str.length - 1) == "A") {
        return true;
    }
    else {
        return false; }
}
function ShowIsAInEnd() {
    var str1 = prompt("enter a string");
    var aInEnd = IsAInEnd(str1);
    if (aInEnd == true) {
        alert("the string ends with A");
    }
    else {
        alert("the string does not end with A");
    }

}
/*ShowIsAInEnd();*/

//targil11
function FindDifference(x, y) {
    div = x - y;
    if (div < 0) {
        div = div * -1;
    }
    return div;
}
function ShowFindDifference() {
    var num1 = parseInt(prompt("enter first number"));
    var num2 = parseInt(prompt("enter second number"));
    var difference = FindDifference(num1, num2);
    alert("the difference is: " + difference);
}
/*ShowFindDifference();*/

//targil12
function SumEvenValuesUpToX(x) {
    var sum = 0;
    for (var i = 0; i <= x; i++) {
        if (i % 2 == 0) {
            sum = sum + i;
        }
    }
    return sum;
}
function ShowSumEvenValuesUpToX() {
    var num1 = parseInt(prompt("enter a number"));
    var sumEven = SumEvenValuesUpToX(num1);
    alert("the sum of even numbers up to " + num1 + " is: " + sumEven);
}
/*ShowSumEvenValuesUpToX();*/

//targil13
function FindMaxValue(x) {
    var max =0;
    for (var i = 0; i < x; i++) {
        var num = parseInt(prompt("enter a number"));
        if (num > max)
        { 
          max = num;
        }
    }
    return max;
}
function ShowFindMaxValue() {
    var num1 = parseInt(prompt("enter how many numbers you want to enter"));
    var max = FindMaxValue(num1);
    alert("the max value is: " + max);
}
/*ShowFindMaxValue();*/

//targil14

function FindExtremesDifference(x) {
    var max = -999;
    var min = 999;
    for (var i = 0; i < x; i++) {
        var num = parseInt(prompt("enter a number"));
        if (num > max) {
            max = num;
        }
        if (num < min) {
            min = num;
        }
    }
    var difference = max - min;
    return difference;
}
function ShowFindExtremesDifference() {
    var num1 = parseInt(prompt("enter how many numbers you want to enter"));
    var difference = FindExtremesDifference(num1);
    alert("the difference between the max and min values is: " + difference);
}
/*ShowFindExtremesDifference();*/

//targil15
function ConcatStrings(x) {
    var concat = "";
    for (var i = 0; i < x; i++) {
        var str = prompt("enter a string");
        concat = concat + str;
        concat = concat + " ";
    }
    return concat;
}
function ShowConcatStrings() {
    var num1 = parseInt(prompt("enter how many strings want to enter???"));
    var concat = ConcatStrings(num1);
    alert(concat);
}
ShowConcatStrings();