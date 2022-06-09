// 3. Buatlah fungsi untuk membedakan mana String yang sama maupun yang beda dari 2 buah Array
// di bawah ini. (15 point)

const array1 = ["Mangga","Apel","Melon","Pisang","Sirsak","Tomat","Nanas","Nangka","Timun","Mangga"]
const array2 = ["Bayam","Wortel","Kangkung","Mangga","Tomat","Kembang Kol","Nangka","Timun"]


function sameDiff(array1,array2) {
    let same = new Set()
    let diff = new Set()
    let hasil = ''
    for (let index = 0; index < array1.length; index++) {
        for (let index2 = 0; index2 < array2.length; index2++) {
            if(array1[index] == array2[index2]) {
                same.add(array1[index])
            }
        }
    }
    diff = new Set([...array1,...array2].filter(x => !same.has(x)))
    hasil+= 'Same = ['+ Array.from(same).join(', ') + ']\nDifferent = [' + Array.from(diff).join(', ') +']'
    return hasil
}

console.log(sameDiff(array1,array2))


//Same = ["Mangga","Tomat","Nangka","Timun"]
//Different = ["Apel","Melon","Pisang","Sirsak","Nanas","Bayam","Wortel","Kangkung","Kembang Kol"]