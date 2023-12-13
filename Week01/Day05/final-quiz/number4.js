//soal 4
// Buatlah algoritma untuk empat soal di bawah ini, sesuai dengan nilai “n”
// Contoh output di bawah adalah ketika nilai “n” = 5

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

// 1
// 2 1
// 3 2 1
// 4 3 2 1
// 5 4 3 2 1

// 1
// 2 3
// 4 5 4
// 3 2 1 2
// 3 4 5 4 3

// 1 10 11 20 21
// 2 9 12 19 22
// 3 8 13 18 23
// 4 7 14 17 24
// 5 6 15 16 25


function pertama(angka) {
    let baris = ''
    for (let index = 1; index <= angka; index++) {
        for (let index2 = 1; index2 <= index; index2++) {
            baris += index + ' '
        }
        baris +=  '\n'
    }
    return baris
}
console.log(pertama(5))


function kedua(angka) {
    let baris = ''
    for (let index = 1; index <= angka; index++) {
        for (let index2 = index; index2 >= 1; index2--) {
            baris +=index2 + ' '
        }
        baris +=  '\n'
    }
    return baris
}
console.log(kedua(5))


function ketiga(angka) {
    let panjang = 0; // untuk nampung panjang keseluruhan angka
    let arr = []; // untuk menampung angka yang akan di loop bolak balik
    for (let index = 1; index <= angka; index++) {
        if (index <= angka) {
            arr.push(index)
        }
        panjang += index;
    }

    let baris = '' //buat nyimpan data baris

    // generate angka bolak balik
    let index = 1; // init index
    let i = 0; // anchor untuk bolak balik
    while (index <= panjang) {
        if (i <= arr.length-1) {
            baris += arr[i] + ' '
            i++
        }else{
            arr.reverse()
            i = 1
            baris += arr[i] + ' '
            i++
        }
        index++
    }

    // menyusun ulang baris menjadi piramid
    let hasil = '' // variable baris akan di rekonstruksi ke bentuk piramid dan disimpan ke sini
    let mulaiDari = 0
    for (let index = 0; index < angka; index++) {
        for (let index2 = 0; index2 <= index; index2++) {
            hasil += baris.split(' ')[mulaiDari] + ' '
            mulaiDari++
        }
        hasil += '\n'
    }
    return hasil
}
console.log(ketiga(5))


function empat(n) {
    // bikin array dulu n x n
    let panjang = 1
    let arr =  [] //create row
    for (let index = 0; index < n; index++) {
        arr[index] = new Array(index) //create column
        for (let index2 = 0; index2 < n; index2++) {
            arr[index][index2] = panjang
            panjang ++
        }
        
    }

    // susun array biar bisa back and forth
    let reverseOrNot = false
    let baris = []
    for (let index = 0; index < n; index++) {
        if (reverseOrNot) {
            arr[index].reverse()
            for (let index2 = 0; index2 < n; index2++) {
                baris.push(arr[index][index2])
            }
            reverseOrNot = false
        }else{
            for (let index2 = 0; index2 < n; index2++) {
                baris.push(arr[index][index2])
            }
            reverseOrNot = true
        }
    }

    // tranpose
    let transpose =  arr[0].map((currentValue, index) => arr.map(c => c[index]));


    // transpose to string
    let hasil = ''
    for (let index = 0; index < n; index++) {
        for (let index2 = 0; index2 < n; index2++) {
            hasil += transpose[index][index2] + ' '
        }
        hasil += '\n'
    }

    return hasil
}
console.log(empat(5))