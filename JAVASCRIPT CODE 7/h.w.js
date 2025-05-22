var brr_patapim = [80,60,40];
function myfunction(num) {
    return num + 20;
}
var bombardino_crocodilo = brr_patapim.map(myfunction);
console.log(bombardino_crocodilo);
function ascending () {
    bombardino_crocodilo.sort(function (a, b) {return a - b});
    console.log(bombardino_crocodilo);
}
function descending () {
    bombardino_crocodilo.sort(function (a, b) {return b - a});
    console.log(bombardino_crocodilo);
}
ascending()
descending()