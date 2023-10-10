let display = document.getElementById("inputBox");
let expression = ""; 
function addDisplay(text)
{
    console.log(text);
    expression += text; 
    display.value = expression;
}
function calc ()
{
    let result = eval(expression);
    display.value = result;
    expression = result; 
}
function clearCalc()
{
    display.value = ''; 
    expression = ''; 
}