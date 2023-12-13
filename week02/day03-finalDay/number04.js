// 4. Buatlah logika sederhana untuk bentuk seperti di bawah ini, dengan nilai parameter yang tidak
// ditentukan. (10 point)




// program menggunakan floor untuk mengambil nilai bulat dari parameter end, 
// kalau menggunakan round saat memasukan nilai genap langsung dibulatkan keatas, hasilnya tetap jadi ganjil
// dan pastikan juga kalau nilai dari parameter akhir adalah ganjil
// karna piramid membentuk pola L dengan nilai yang berurut dari atas ke bawah, dari kiri ke kanan
// yang artinya panjang baris sama banyaknya dengan jumlah data di baris terakhir
function piramid2(start,end) {
    let baris = ''
    let down = 0
    for (let index = start; index <= Math.floor((end+start)/2); index++) { //bikin baris
        for (let index2 = index; index2 <= index + down ; index2++) { //bikin angka perurutan
            baris += index2 + ' '
        }
        baris +=  '\n'
        down++
    }
    return baris
}
// apa jadinya kalau kita memasukan nilai genap?
// yang terjadi adalah data terakhir dari baris terakhir akan bernilai -1 dari parameter end
// hal ini terjadi karna nilai panjang baris dengan panjang data di baris terakhir harus sama banyak agar simetris.


console.log(piramid2(1,13))
// 1
// 2 3
// 3 4 5
// 4 5 6 7
// 5 6 7 8 9
// 6 7 8 9 10 11
// 7 8 9 10 11 12 13


console.log(piramid2(5,17))
// 5
// 6 7
// 7 8 9
// 8 9 10 11
// 9 10 11 12 13
// 10 11 12 13 14 15
// 11 12 13 14 15 16 17