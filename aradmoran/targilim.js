//alert("something");
//document.write("something");

//document.write(" ");

//var num = prompt("enter a number", 7);
//document.write(num);

//document.write(" ");

//var name = prompt("enter your name");
//document.write("hello " + name);

//document.write(" ");

//var age = parseInt(prompt("enter your age", 0));
//document.write("you are " + age + " years old");

//document.write("<br/>");

//document.write("next to" + age + " " + "is" + " " + (age + 1));

//var num1 = parseInt(prompt("enter  num1"));
//var num2 = parseInt(prompt("enter  num2"));

//document.write("the sum " + (num1 + num2));

//document.write("<br/>");

//document.write("the machpela " + (num1 * num2));
//document.write("<br/>");
//if (num1 > num2) {
//    document.write("the efresh " + (num1 - num2));
//}
//else if (num2 > num1) {
//    document.write("the efresh " + (num2 - num1));
//}
//var grade = [90, 80, 70, 60, 50]
//function avg(grade) {
//    var sum = 0;
//    for (var i = 0; i < grade.length; i++) {
//        sum += grade[i];
//    }
//    alert("the avg is " + (sum / grade.length));
//}
//function createbutton() {
//    var button = document.createElement("input");
//    button.setAttribute("type", "button");
//    button.setAttribute("value", "click");
//    button.setAttribute("onclick", "avg(grade)");
//    var div = document.getElementById("123");
//    div.appendChild(button);
//}
//createbutton();
//function DrawImage(index, el)
//{
//    var img1 = document.createElement("img");
//    img1.setAttribute("src", "ing/jpg." + index + ".jpg");
//    img1.setAttribute("width", "100");
//    img1.setAttribute("height", "100");
//    var el = document.getElementById("tblText");
//    el.appendChild(img1);
//}
//function Drawntable(arr) {
//    for (var i = 0; i < arr.length; i++) {
//        var tabledata1 = document.createElement("td");
//        DrawImage(arr[i], tabledata1);         
//        var el = document.getElementById("tblText");
//        el.appendChild(tabledata1);
//    }
//}
//Drawntable([1, 2, 3, 4, 5]);
function marchmilim(arr) {
    var el = document.getElementById("tbl3");
    var tr = document.createElement("tr");
    for (var i = 0; i < arr.length/3; i++) {
        if (i % 3 == 0&&i!=0) {
            var tr = document.createElement("tr");
            el.appendChild(tr);
        }
        else 
        {
            var td = document.createElement("td");
            td.innerText = arr[i];
            tr.appendChild(td);
            
        }
        el.appendChild(tr);
    }
}
marchmilim(["headline","no", "yes", "yep", "clear", "clean", "cloor","dolls","bills"]);