//soal 10
const animal = ['dog', 'cat', 'seal', 'walrus', 'lion', 'cat'];

function potongPotong(arrays, hilangkan) {
    // Find where the 'walrus' item is
    const hapus = arrays.indexOf(hilangkan);
    // Join the portion before 'walrus' to the portion after 'walrus'
    return [...arrays.slice(0, hapus), ...arrays.slice(hapus + 1)]
}

console.log(potongPotong(animal, "walrus"));
// now animalsSliced has ['dog', 'cat', 'seal', 'lion', 'cat']