//targil1
//var div = document.getElementById("aElement");
//var aEl = document.createElement("a");
//aEl.setAttribute("href", "http://www.google.com");
//aEl.innerHTML = "google";
//div.appendChild(aEl);

//targil2
//var div = document.getElementById("aElement");
//var img = document.createElement("img");
//img.setAttribute("src","ing/jpg.1.jpg");
//img.setAttribute("height", "200");
//img.setAttribute("width", "300");
//div.appendChild(img);

//targil3
//var div = document.getElementById("aElement");
//var table = document.createElement("table");
//var tr = document.createElement("tr");
//var td1 = document.createElement("td");
//var td2 = document.createElement("td");
//var img = document.createElement("img");
//var link = document.createElement("a");
//link.setAttribute("href", "http://www.google.com");
//img.setAttribute("height", "100");
//img.setAttribute("width", "100");
//img.setAttribute("src", "ing/jpg.1.jpg");
//link.innerHTML = "GOOGLE";
//td1.appendChild(link);
//td2.appendChild(img);
//tr.appendChild(td1);
//tr.appendChild(td2);
//table.appendChild(tr);
//div.appendChild(table);

//targil4
//var div = document.getElementById("aElement");
//var table = document.createElement("table");
//for (var i = 1; i <= 5; i++) {
//    var tr = document.createElement("tr");
//    var td = document.createElement("td");
//    var img = document.createElement("img");
//    img.setAttribute("src", "ing/jpg." + i + ".jpg");
//    img.setAttribute("height", "100");
//    img.setAttribute("width", "100");
//    var td = document.createElement("td");
//    td.appendChild(img);
//    tr.appendChild(td);
//    table.appendChild(tr);
//}
//div.appendChild(table);

//targil5
//var div = document.getElementById("aElement");
//var table = document.createElement("table");
//for (var i = 1; i <= 5; i++) {
//    var tr = document.createElement("tr");
//    var td = document.createElement("td");
//    var td2 = document.createElement("td");
//    var link = document.createElement("a");
//    link.setAttribute("href", i+".html");
//    link.innerHTML = i + " " + "קישור לדף "
//    var img = document.createElement("img");
//    img.setAttribute("src", "ing/jpg." + i + ".jpg");
//    img.setAttribute("height", "100");
//    img.setAttribute("width", "100");
//    var td = document.createElement("td");
//    td.appendChild(img);
//    td2.appendChild(link);
//    tr.appendChild(td);
//    tr.appendChild(td2);
//    table.appendChild(tr);
//}
//div.appendChild(table);

//targil6
//div = document.getElementById("aElement");
//var table = document.createElement("table");
//for (var i = 1; i <= 5; i++) {
//    var tr = document.createElement("tr");
//    var td = document.createElement("td");
//    var td2 = document.createElement("td");
//    var link = document.createElement("a");
//    link.setAttribute("href", i+".html");
//    link.innerHTML = i + " " + "קישור לדף "
//    var img = document.createElement("img");
//    img.setAttribute("src", "ing/jpg." + i + ".jpg");
//    img.setAttribute("height", "100");
//    img.setAttribute("width", "100");
//    if (i % 2 == 0) {
//        tr.style.backgroundColor = "gray";
//    }
//    var td = document.createElement("td");
//    td.appendChild(img);
//    td2.appendChild(link);
//    tr.appendChild(td);
//    tr.appendChild(td2);
//    table.appendChild(tr);
//}
//div.appendChild(table);

//targil7
var num = prompt("enter a number");
div = document.getElementById("aElement");
var table = document.createElement("table");
for (var i = 1; i <= num; i++) {
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    var td2 = document.createElement("td");
    var link = document.createElement("a");
    link.setAttribute("href", i+".html");
    link.innerHTML = i + " " + "קישור לדף "
    var img = document.createElement("img");
    img.setAttribute("src", "ing/jpg." + i + ".jpg");
    img.setAttribute("height", "100");
    img.setAttribute("width", "100");
    if (i % 2 == 0) {
        tr.style.backgroundColor = "gray";
    }
    var td = document.createElement("td");
    td.appendChild(img);
    td2.appendChild(link);
    tr.appendChild(td);
    tr.appendChild(td2);
    table.appendChild(tr);
}
div.appendChild(table);