function myDisplayer (value) {
    console.log(value);
}
function myCalculator(num1,num2, myCallback) {
    let sum = num1 - num2;
    myCallback(sum);
}
myCalculator(10,25, myDisplayer);