function isArraysEqual(arrayA, arrayB) {
    if (arrayA.length === arrayB.length) {

        return arrayA.every((element, index) => element === arrayB[index]); //jika pakai function dari js
        
        // return arrayA.every((element, index)  => isSame(element, index, arrayB)); //jika mau pakai function sendiri

        // // bisa gini juga kalau mau, tapi gak bisa pakai if didalamnya, gak tau kenapa jadi langsung return saja
        // return arrayA.every(function(element, index)  {
        //     return element === arrayB[index];
        // });
    }
    return false;
}

function isSame(element, index, array){
    return element === array[index];
}

const fruitNamesA = ['rambutan', 'durian', 'jeruk', 'nangka'];
const fruitNamesB = ['rambutan', 'durian', 'jeruk', 'nangka'];
const fruitNamesC = ['anggur', 'apel', 'mangga', 'alpukat'];
console.log(isArraysEqual(fruitNamesA, fruitNamesB)); // true
console.log(isArraysEqual(fruitNamesA, fruitNamesC)); // false
