//soal 2
// Buatlah algoritma untuk menampilkan angka 1 s/d n, dengan ketentuan:
// kelipatan 3 diganti “OK”, kelipatan 4 diganti “YES”, kelipatan 3 & 4 diganti “OKYES”
// Contoh output di bawah adalah ketika nilai “n” = 15

function okeYes(angka) {
    let hasil = ''
    for (let index = 1; index <= angka; index++) {
        if (index % 3 == 0 && index % 4 == 0) {
            hasil += 'OKYES' + '\n'
        } else if (index % 3 == 0) {
            hasil += 'OK' + '\n'
        }else if(index % 4 == 0){
            hasil += 'YES' + '\n'
        }else{
            hasil += index + '\n'
        }
    }
    return  hasil
}
console.log(okeYes(15))