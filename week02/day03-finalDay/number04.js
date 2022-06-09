// 4. Buatlah logika sederhana untuk bentuk seperti di bawah ini, dengan nilai parameter yang tidak
// ditentukan. (10 point)




function piramid2(start,end) {
    let baris = ''
    let down = 0
    for (let index = start; index <= Math.round((end+start)/2); index++) { //bikin baris
        for (let index2 = index; index2 <= index + down ; index2++) { //bikin angka perurutan
            baris += index2 + ' '
        }
        baris +=  '\n'
        down++
    }
    return baris
}


console.log(piramid2(1,13))
// 1
// 2 3
// 3 4 5
// 4 5 6 7
// 5 6 7 8 9
// 6 7 8 9 10 11
// 7 8 9 10 11 12 13


console.log(piramid2(5,17))
// 5
// 6 7
// 7 8 9
// 8 9 10 11
// 9 10 11 12 13
// 10 11 12 13 14 15
// 11 12 13 14 15 16 17