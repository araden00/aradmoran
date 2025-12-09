alert("something");
document.write("something");

document.write(" ");

var num = prompt("enter a number", 7);
document.write(num);

document.write(" ");

var name = prompt("enter your name");
document.write("hello " + name);

document.write(" ");

var age = parseInt(prompt("enter your age", 0));
document.write("you are " + age + " years old");

document.write("<br/>");

document.write("next to" + age + " " + "is" + " " + (age + 1));

var num1 = parseInt(prompt("enter  num1"));
var num2 = parseInt(prompt("enter  num2"));

document.write("the sum " + (num1 + num2));

document.write("<br/>");

document.write("the machpela " + (num1 * num2));
document.write("<br/>");
if (num1 > num2) {
    document.write("the efresh " + (num1 - num2));
}
else if (num2 > num1) {
    document.write("the efresh " + (num2 - num1));
}
