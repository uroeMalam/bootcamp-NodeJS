//soal 3
// Buat script program supaya bisa muncul output seperti di bawah
// 1
// 2 3
// 3 4 5
// 4 5 6 7
// 5 6 7 8 9

function piramid(angka) {
    let baris = ''
    for (let index = 1; index <= Math.round(angka/2); index++) { //bikin baris
        for (let index2 = index; index2 <= index + index - 1 ; index2++) { //bikin angka perurutan
            baris += index2 + ' '
        }
        baris +=  '\n'
    }
    return baris
}
console.log(piramid(9))