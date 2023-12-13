/**
 * Menghitung jarak kordinat
 * 𝑑 = √(𝑥1 − 𝑥2)^2 + (𝑦1 −𝑦2)^2
 */

function getCordinat(x1,y1,x2,y2) {//sudah bener cuma di komentar itu typo aja
    if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
        return 'input kordinat dalam angka';
    } else {
        return Math.sqrt(Math.pow((x2)-(x1),2) + Math.pow((y2)-(y1),2));
    }
}
   
console.log(getCordinat(3,4,-4,-5)); //9
console.log(getCordinat("1","2","-1","-2")); //1
console.log(getCordinat("x","2","-y","-2")); //input kordinat dalam angka
console.log(getCordinat(3.2,4.5,-4.4,-5)); //13.695801445917125


// di google gini rumusnya
// 𝑑 = √(𝑥2 − 𝑥1)^2 + (𝑦2 −𝑦1)^2
// https://id.wikihow.com/Mencari-Jarak-antara-Dua-Titik