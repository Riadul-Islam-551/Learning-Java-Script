document.write("<strong> Let's Calculate Some Problem ---------- <strong/> <br/><br/><br/>")

var num1 , num2 , result;
num1 = parseInt(prompt("Enter first number : ")); // if we call the parseInt() or parseFloat() function with the prompt() function then there is no need to call parseInt() or parseFloat() function separately
num2 = parseInt(prompt("Enter second number : ")); // if we call the parseInt() or parseFloat() function with the prompt() function then there is no need to call parseInt() or parseFloat() function separately

// num1 = parseInt(num1);
// num2 = parseInt(num2);

result = num1 + num2 ;
document.write(num1 + " + " + num2 + " = " + result + "<br>");

result = num1 - num2 ;
document.write(num1 + " - " + num2 + " = " + result + "<br>");

result = num1 * num2 ;
document.write(num1 + " * " + num2 + " = " + result + "<br>");

result = num1 / num2 ;
document.write(num1 + " / " + num2 + " = " + result + "<br>");

result = num1 % num2 ;
document.write(num1 + " % " + num2 + " = " + result + "<br>");
