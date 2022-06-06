//soal 1
// Terdapat deret angka sebagai berikut : 12,24,36,48,60
// Buat script program menggunakan looping for untuk menampilkan deret diatas


function deretAngka(banyakAngka, KelipatanBerapa){
    var deret = ''
    for(var i = 1; i <= banyakAngka; i++){
        if (i % KelipatanBerapa == 0){
            deret += i + ' ';
        }             
    }
    return deret;
}

console.log(deretAngka(60,12));