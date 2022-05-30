// terdapat array employees
const cities = ["merak", "tangerang", "jakarta", "bogor", "cianjur", "cimahi", "bandung"];

const bogor = cities.indexOf("bogor")

const citiesSliced = [...cities.slice(0, bogor), ...cities.slice(bogor + 1)]

function citiesSlice(arrays, cityBetween) {
    const hapus = arrays.indexOf(cityBetween);
    return [...arrays.slice(0, hapus), ...arrays.slice(hapus + 1)]
}

console.log(citiesSlice(cities,"jakarta"));
//['merak', 'tangerang', 'bogor', 'cianjur', 'cimahi', 'bandung']