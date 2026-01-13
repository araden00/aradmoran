//targil1
//function Drawnlike() {
//    var link = document.createElement("a");
//    link.setAttribute("href", "1.html");
//    link.setAttribute("style", "color:red");
//    link.innerText = "קישור לדף 1";
//    el.appendChild(link);
//}
//Drawnlike();

//targil2
//function Drawnlike() {
//    var img1 = document.createElement("img");
//    img1.setAttribute("src","ing/jpg.1.jpg");
//    img1.setAttribute("width", "200");
//    img1.setAttribute("height", "200")
//    el.appendChild(img1);
//}
//Drawnlike();

//targil3
//function Drawnlike3() {
//    for (var i = 0; i < 2; i++)
//    {
//        var imgindex = prompt("imgIndex");
//        var img1 = document.createElement("img");
//        img1.setAttribute("src", "ing/jpg." + imgindex + ".jpg");
//        img1.setAttribute("width", "200");
//        img1.setAttribute("height", "200")
//        el.appendChild(img1);
//    }
//}
//Drawnlike3();

//targil4
//function Drawnlike4() {
//    for (var i = 0; i < 2; i++)
//    {
//        var imgindex = prompt("imgIndex");
//        var imghight = prompt("img hight");
//        var imgWidth = prompt("img width");
//        var img1 = document.createElement("img");
//        img1.setAttribute("src", "ing/jpg." + imgindex + ".jpg");
//        img1.setAttribute("height", +imghight);
//        img1.setAttribute("width", +imgWidth);
//        el.appendChild(img1);
//    }
//}
//Drawnlike4()

//targil5
//function DrawSomeImages() {
//    var num = prompt("how many imgs");
//    for (var i = 1; i <= num; i++)
//    {
//        var img1 = document.createElement("img");
//        img1.setAttribute("src", "ing/jpg." + i +".jpg");
//        img1.setAttribute("width", "200");
//        img1.setAttribute("height", "200");
//        el.appendChild(img1);
//        newbr = document.createElement("br");
//        el.appendChild(newbr);
//    }

//}
//DrawSomeImages()

//targil6
//function Drawnlike6() {
//        var linkIndex = prompt("enter link index");
//    var link = document.createElement("a");

//    link.setAttribute("href", linkIndex+".html");
//        link.setAttribute("style", "color:red");
//    link.innerText = linkIndex+" "+"קישור לדף";
//    newbr = document.createElement("br");
//    el.appendChild(link);
//    el.appendChild(newbr);
//    }
//    Drawnlike6();
//function Drawsomelinks6() {
//    for (var i = 1; i <= 4; i++)
//        Drawnlike6();
//}
//Drawsomelinks6()

//targil7 A
//function DrawnRow() {
//    var rowindex = prompt("Enter row index");
//    var tablerow = document.createElement("tr");
//    var tabledata1 = document.createElement("td");
//    var tabledata2 = document.createElement("td");
//    var img1;
//    var link1;
//     img1 = Drawnlike4();
//     link1 = Drawnlike6();
//    tabledata1.appendChild(img1);
//    tabledata2.appendChild(link1);
//    tablerow.appendChild(tabledata1);
//    tablerow.appendChild(tabledata2);
//    el.appendChild(tablerow);
//}
//DrawnRow()

//function Drawnlike4() {
//        var imgindex = prompt("imgIndex");
//        var imghight = prompt("img hight");
//        var imgWidth = prompt("img width");
//        var img1 = document.createElement("img");
//        img1.setAttribute("src", "ing/jpg." + imgindex + ".jpg");
//        img1.setAttribute("height", +imghight);
//        img1.setAttribute("width", +imgWidth);
//    el.appendChild(img1);
//}
//function Drawnlike6() {
//        var linkIndex = prompt("enter link index");
//    var link = document.createElement("a");
//    link.setAttribute("href", linkIndex+".html");
//        link.setAttribute("style", "color:red");
//    link.innerText = linkIndex + " " + "קישור לדף";
//    el.appendChild(link);
//    }

//targil7 B

function Drawntable() {
    var table = document.createElement("table");
    var row = prompt("Enter number of row");
    for (var i = 0; i < row; i++) {
        DrawnRow();
        table.appendChild(tablerow);
    }
    el.appendChild(table);
}
Drawntable();

function DrawnRow() {
    var rowindex = prompt("Enter row index");
    var tablerow = document.createElement("tr");
    var tabledata1 = document.createElement("td");
    var tabledata2 = document.createElement("td");
    var img1= Drawnlike4();
    var link = Drawnlike6();
    tabledata1.appendChild(img1);
    tabledata2.appendChild(link);
    tablerow.appendChild(tabledata1);
    tablerow.appendChild(tabledata2);
}
function Drawnlike4() {
        var imgindex = prompt("imgIndex");
        var imghight = prompt("img hight");
        var imgWidth = prompt("img width");
        var img1 = document.createElement("img");
        img1.setAttribute("src", "ing/jpg." + imgindex + ".jpg");
        img1.setAttribute("height", +imghight);
        img1.setAttribute("width", +imgWidth);
        
}
function Drawnlike6() {
    var linkIndex = prompt("enter link index");
    var link = document.createElement("a");
    link.setAttribute("href", linkIndex+".html");
    link.setAttribute("style", "color:red");
    link.innerText = linkIndex + " " + "קישור לדף";

}

