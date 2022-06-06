//soal 11
function startsWithE(animal) {
    let result = [];
    for (let index = 0; index < animal.length; index++) {
        if (animal[index].substring(0,1) === 'e') {
            result.push(animal[index]);
        }            
    }
    return result;
}
const animals = ['elephant', 'tiger', 'emu', 'zebra', 'cat', 'dog', 'eel', 'rabbit', 'goose', 'earwig'];

console.log(startsWithE(animals)); // ["elephant", "emu", "eel", "earwig"]
