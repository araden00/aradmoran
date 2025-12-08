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

//document.write("next to" + age+ " " + "is"+ " " +(age+1));

//var num1 = parseInt(prompt("enter  num1"));
//var num2 = parseInt(prompt("enter  num2"));

//document.write("the sum " + (num1 + num2));

//document.write("<br/>");

//document.write("the machpela " + (num1 * num2));
//document.write("<br/>");
//if (num1 > num2)
//{
//    document.write("the efresh " + (num1 - num2));
//}
//else if (num2 > num1)
//{
//    document.write("the efresh " + (num2 - num1));
//}

//function GetAnswer() {
//    var num = parseInt(document.getElementById("num").value);
//    var num2 = parseInt(document.getElementById("num2").value);
//    var correct = num + num2;
//    document.getElementById("num3").value = correct;

//    if (correct = num1 + num2); {
//        document.getElementById("span").innerHTML = "מעולה"
//    }
//    if (correct = !num1 + num2) {
//        document.getElementById("span").innerHTML = "טעות"
//    }
//}
function CheckAnswer()
{
    var num = parseInt(document.getElementById("num+").value);
    var num2 = parseInt(document.getElementById("num2+").value);
    var userAnswer = parseInt(document.getElementById("num3+").value);
    var correct = num + num2;
    if (userAnswer == correct)
    {
        document.getElementById("span1+").value = "יפה מאוד ";
    }
    else
    {
        document.getElementById("span1+").value = "נסה שנית";
    }

    var num = parseInt(document.getElementById("num-").value);
    var num2 = parseInt(document.getElementById("num2-").value);
    var userAnswer = parseInt(document.getElementById("num3-").value);
    var correct = num - num2;
    if (userAnswer == correct) {
        document.getElementById("span1-").value = "יפה מאוד ";
    }
    else {
        document.getElementById("span1-").value = "נסה שנית";
    }

    var num = parseInt(document.getElementById("num*").value);
    var num2 = parseInt(document.getElementById("num2*").value);
    var userAnswer = parseInt(document.getElementById("num3*").value);
    var correct = num * num2;
    if (userAnswer == correct) {
        document.getElementById("span1*").value = "יפה מאוד ";
    }
    else {
        document.getElementById("span1*").value = "נסה שנית";
    }

    var num = parseInt(document.getElementById("num/").value);
    var num2 = parseInt(document.getElementById("num2/").value);
    var userAnswer = parseInt(document.getElementById("num3/").value);
    var correct = num / num2;
    if (userAnswer == correct) {
        document.getElementById("span1/").value = "יפה מאוד ";
    }
    else {
       document.getElementById("span1/").value = "נסה שנית";
    }

    var num = parseInt(document.getElementById("num%").value);
    var num2 = parseInt(document.getElementById("num2%").value);
    var userAnswer = parseInt(document.getElementById("num3%").value);
    var correct = num % num2;
    if (userAnswer == correct) {
        document.getElementById("span1%").value = "יפה מאוד ";
    }
    else {
        document.getElementById("span1%").value = "נסה שנית";
    }
}



    function pool() {
        var n1rnd = Math.floor(Math.random() * 10) + 1;
        var n2rnd = Math.floor(Math.random() * 10) + 1;
        document.getElementById("num+").value = n1rnd;
        document.getElementById("num2+").value = n2rnd;
        var n3rnd = Math.floor(Math.random() * 10) + 1;
        var n4rnd = Math.floor(Math.random() * 10) + 1;
        document.getElementById("num-").value = n3rnd;
        document.getElementById("num2-").value = n4rnd;
        var n5rnd = Math.floor(Math.random() * 10) + 1;
        var n6rnd = Math.floor(Math.random() * 10) + 1;
        document.getElementById("num*").value = n5rnd;
        document.getElementById("num2*").value = n6rnd;
        var n7rnd = Math.floor(Math.random() * 10) + 1;
        var n8rnd = Math.floor(Math.random() * 10) + 1;
        document.getElementById("num/").value = n7rnd;
        document.getElementById("num2/").value = n8rnd;
        var n9rnd = Math.floor(Math.random() * 10) + 1;
        var n10rnd = Math.floor(Math.random() * 10) + 1;
        document.getElementById("num%").value = n9rnd;
        document.getElementById("num2%").value = n10rnd;
    }







