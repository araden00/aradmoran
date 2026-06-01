//targil 1
function delet() {
    document.getElementById("img1").style.display = "none";
}
function create() {
    document.getElementById("img1").style.display = "block";
}
//targil 2
function big() {
    document.getElementById("img2").width += 10;

}
function small() {
    document.getElementById("img2").height -= 10;
}
//targil 3
function change() {
    var change = document.getElementById("img3").src;
    document.getElementById("img3").src = document.getElementById("img4").src;
    document.getElementById("img4").src = change;
}