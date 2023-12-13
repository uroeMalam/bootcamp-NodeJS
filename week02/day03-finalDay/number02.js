// 2. Buat function rotateArray(array,k). (15 point)


const arr = [3,8,9,7,6]

function rotateArray(array,k){
    let hasil = array // untuk menampung array yang akan dirotate
    let lastIndex = array.length-1 // untuk menampung index terakhir array
    let hasilInString = ''
    for (let index = 1; index <= k; index++) {
        hasilInString += `[${hasil}] => `
        let temp = hasil[lastIndex] // untuk menampung data terakhir array
        hasil.pop() // menghapus data terakhir array
        hasil.unshift(temp) // menambahkan data terakhir array ke awal array
        hasilInString += `[${hasil}] \n`
    }
    return hasilInString
}


console.log(rotateArray(arr,3))// putar 3x
/**
[3, 8, 9, 7, 6] => [6, 3, 8, 9, 7]
[6, 3, 8, 9, 7] => [7, 6, 3, 8, 9]
[7, 6, 3, 8, 9] => [9, 7, 6, 3, 8]
*/
