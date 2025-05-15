function myfunction() {
    var venom
    var carnage = new Date().getHours();

if (carnage < 10) {
    venom = "WE ARE VENOM";
}
else if (carnage < 20) {
    venom = "LET THERE BE CARNAGE";
}
else  {
    venom = "THE LAST DANCE";
}
console.log("Current catchphrase is :" + venom);
console.log(carnage);
}
myfunction()