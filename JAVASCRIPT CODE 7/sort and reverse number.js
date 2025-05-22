var tung_tung_sahur = [111,222,100,5783,6789,1]
function ascending () {
    tung_tung_sahur.sort(function (a, b) {return a - b});
    console.log(tung_tung_sahur);
}
function descending () {
    tung_tung_sahur.sort(function (a, b) {return b - a});
    console.log(tung_tung_sahur);
}
ascending()
descending()