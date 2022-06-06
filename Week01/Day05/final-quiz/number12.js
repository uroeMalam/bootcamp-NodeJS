//soal 12
function range(startOrEnd, end, step) {
    let result = [];

    if (end === undefined) {
        for (let index = 0; index < startOrEnd; index++) {
            result.push(index);
        }
        return result;
    }else{
        return rangeFromStartToEnd(startOrEnd, end, step);
    }
    
}

function rangeFromStartToEnd(start, end, step = 1){
    let result = [];
    for (let index = start; index < end; index += step) {
        result.push(index);
    }
    return result;
};

console.log(range(9));//(9) [0, 1, 2, 3, 4, 5, 6, 7, 8]

console.log(range(5,9));//(4) [5, 6, 7, 8]
