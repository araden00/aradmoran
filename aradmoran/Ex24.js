// targil 2 b

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
//Drawntable([2, 2, 2, 2, 2]);

//targil 7
function buildTable(arr) {
    // תיקון ה-ID ל-tbl3
    var table = document.getElementById("tbl3");

    var row1 = document.createElement("tr");
    var row2 = document.createElement("tr");

    for (let i = 0; i < arr.length; i += 3) {
        var text = arr[i];
        var imgSrc = arr[i + 1];
        var size = arr[i + 2];

        // טיפול בשורה הראשונה (טקסט)
        var td1 = document.createElement("td");
        td1.textContent = text; // התיקון כאן: הוספת הטקסט לתוך התא!
        row1.appendChild(td1);

        // טיפול בשורה השנייה (תמונה)
        var td2 = document.createElement("td");
        var img = document.createElement("img");
        img.src = imgSrc;
        img.alt = text;
        img.width = size;
        img.height = size;
        td2.appendChild(img);
        row2.appendChild(td2);
    }

    // הוספת השורות המוכנות לטבלה
    table.appendChild(row1);
    table.appendChild(row2);
}
buildTable([
    "dolphin", "ing/jpg.1.jpg", "100",
    "elephant", "ing/jpg.2.jpg", "100",
    "rabbit", "ing/jpg.3.jpg", "100",
    "giraffe", "ing/jpg.4.jpg", "100"
]);