// 1. Seekor katak ingin menyebrang jalan dari posisi X=10, ke posisi Y=85. Untuk Satu
// kali lompatan, katak hanya bisa menempuh K=30. Buat function dan hitung berapa
// jumlah lompatan yang dibutuhkan untuk mencapai posisi X+K >= Y. (5 point)

// x = posisi awal, y=target posisi, k= jarak temputh satu kali lompatan

// function totalLompat(x,y,k){
//     let lompat = 0
//     while (x < y) {
//         x += k
//         lompat++
//     }
//     return lompat
// }

// more efficient way
function totalLompat(x,y,k){
    let lompat = 0
    for (let index = x; index <= y; index += k) {
         lompat++
    }
    return lompat
}


console.log(totalLompat(10,85,30));