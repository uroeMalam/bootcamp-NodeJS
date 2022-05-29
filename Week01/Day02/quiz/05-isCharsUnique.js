function isCharsUnique(string){
    // set.size menghitung panjang objct tapi mengabaikan nilai yang sama
    return new Set(string).size === string.length; //set adalah object yang hanya menyimpan nilai unik, kalau sama langsung gak dianggap
}

console.log(isCharsUnique('abcdefg'));//true
console.log(isCharsUnique('abcdefga'));//false