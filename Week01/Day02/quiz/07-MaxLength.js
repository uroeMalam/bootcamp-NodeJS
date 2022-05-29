function maxWordLength(params) {
    var array = params.split(' '); //disini dipakein space biar di pecah per kata, kalau tidak malah dipecak per huruf
    var panjangKata = 0;
    var word = '';
    for (let index = 0; index < array.length; index++) {
        if (array[index].length >= panjangKata) {
            panjangKata = array[index].length;
            word = array[index];
        }
    }
    return word;
}

console.log(maxWordLength("aku suka bootcamp sentul city"));//bootcamp