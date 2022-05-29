/** berapa banyak tahun kabisat antara tahun1 ke tahun2 */

function howManyKabisat(year1,year2){
    var count = 0;
    for(var i = year1; i <= year2; i++){
        count += isKabisat(i);
    }
    return count;
}

function isKabisat(year){
    if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
        return 1;
    }else{
        return 0;
    }
}

console.log(howManyKabisat(1997,2021));