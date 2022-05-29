/** ubah value string ke date 
 *  gunakan split
 *  inputan s = bulan/hari/tahun
*/


function strToDate(s){
    var arr = s.split('/');
    if (isNaN(arr[0]) || isNaN(arr[1]) || isNaN(arr[2])){
        return `${arr[0]}/${arr[1]}/${arr[2]} bad format date`;
    }else{
        var date = new Date(arr[2], arr[0]-1, arr[1]); // -1 karena index 0 = jan, 1 = feb, dst
        return date; //format date yyyy-mm-dd
    }
}

console.log(strToDate('12/30/2021'));//Thu Dec 30 2021 00:00:00 GMT+0700 (Western Indonesia Time)
console.log(strToDate('12/aa/bb')); //12/aa/bb bad format date