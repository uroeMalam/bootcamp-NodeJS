/** buat segitiga  */ 

// yAxis = default true
// xAxis = default true
// true berarti angka akan diurutkan berdasarkan start ke end
function segitigaBerpola(start, end,xAxis=true,yAxis=true) {
    let str = ''; // ini nanti dipake buat nampung semua data dalam looping pertama, susunan nya sesuai dengan xAxis
    let baris = []; // nanti setelah selesai looping str, maka semua str akan di simpan dalam array baris
    let hasil = ''; // array baris akan di join dalam hasil sesuai kondisi xAxis
    for (let i = start; i <= end; i++) {
        // kalau xAxis true, maka akan diurutkan berdasarkan start ke end
        if (xAxis) {
            str = str + i+" ";
        }else{
            str = i+ " " + str ;
        }
        baris.push(str);
    }
    // kalau yAxis true maka akan diurutkan berdasarkan start ke end
    if (!yAxis) {
        baris.reverse();
    }
    for (let index = 0; index < baris.length; index++) {
        hasil = hasil + baris[index] + '\n';
    }
    return hasil;
}

console.log(segitigaBerpola(1,4,true,false));
// output 
// 1 2 3 4 
// 1 2 3 
// 1 2 
// 1 


console.log(segitigaBerpola(1,5,false,false));
// output
// 5 4 3 2 1  
// 4 3 2 1  
// 3 2 1
// 2 1  
// 1  

