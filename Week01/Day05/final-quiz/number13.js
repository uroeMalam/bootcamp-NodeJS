//soal 13
const  findSum =(arr, weight) =>{
    for (let index = 0; index < arr.length; index++) {
        for (let index2 = 0; index2 < arr.length; index2++) {
            if (arr[index] + arr[index2] === weight) {
                return `${arr[index]} & ${arr[index2]}`
            }                
        }
        
    }

}

console.log(findSum([1,2,3,4,5],9)); // 4 & 5
