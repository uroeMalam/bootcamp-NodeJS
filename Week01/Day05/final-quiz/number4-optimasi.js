// this is using kevin way combine with my way

//soal 4
// Buatlah algoritma untuk empat soal di bawah ini, sesuai dengan nilai “n”
// Contoh output di bawah adalah ketika nilai “n” = 5

// 1
// 2 3
// 4 5 4
// 3 2 1 2
// 3 4 5 4 3

function ketiga(angka) {
    let hasil = '' // untuk menampung hasil
    let counter = 1 // untuk menampung counter
    let reverse = true // untuk mengatur reverse tidaknya angka

    for (let index = 1; index <= angka; index++) { // looping untuk membuat baris
        for (let index2 = index; index2 <= index+index-1; index2++) { // looping untuk mengisi berapa banyak angka untuk tiap barisnya
            if (reverse) { // jika reverse true maka akan mengisi angka dari awaal ke akhir
                if (counter == angka-1) { // jika kondisi terpenuhi maka ubah reverse menjadi false biar bisa di eksekusi sama else
                    reverse = false
                }
                hasil += counter + ' '
                counter++ // counter bertambah
            } else { // jika reverse false maka akan mengisi angka dari akhir ke awal
                if (counter == angka-angka+2) { // kenapa + 2, karna walaupun if ini dijalankan tapi 2 kondisi dibahwanya tetap dijalankan untuk yang terakhir kalinya
                    reverse = true
                }
                hasil += counter + ' ' 
                counter-- // counter di kurangi untuk mengisi angka dari akhir ke awal
            }
        }
        hasil += '\n' // kalau looping dalam sudah selesai, tambah enter dulu baru masuk ke baris berikutnya
    }

    return hasil //hasil akhir di return
}
console.log(ketiga(5))


// 1 10 11 20 21
// 2 9 12 19 22
// 3 8 13 18 23
// 4 7 14 17 24
// 5 6 15 16 25


function empat(n) {
    let arr = [] // untuk menampung data array ke dalam array (multi dimensi array)
    let hasil = '' // untuk menampung transpose menjadi array
    let count = 1 // untuk menampung counter (n*n)
    let arrChild =[]

    for (let index = 0; index < n; index++) { // looping untuk membuat array pertama
        arrChild[index] = new Array(index) // membuat array baru didalam array pertama untuk menampung angka
        for (let index2 = 0; index2 < n; index2++) { // looping untuk membuat array kedua
            arrChild[index][index2] = count // mengisi multi dimensi array dengan counter
            count++ // counter bertambah
        }
        arr.push( index % 2 == 0 ? arrChild[index] : arrChild[index].reverse()) // menentukan array child menjadi array atau array terbalik
    }

    // arr di transpose, trus di ubah ke string dan di split lagi untuk menampung ke dalam satu array utama saja
    let transpose =  arr[0].map((currentValue, index) => arr.map(c => c[index])).toString().split(',')

    // arr to string
    for (let index = 1; index <= n*n; index++) {
        hasil += transpose[index-1] + ' '
        if (index % n == 0) {
            hasil += '\n' 
        }
    }

    return hasil // return hasil
}
console.log(empat(5))