//soal 5
// Pertumbuhan penduduk di kota Bogor tahun ini adalah 30.000, tiap tahun bertambah 3%.
// Berapa tahun yang dibutuhkan untuk mencapai jumlah penduduk 100.000 ? Buat script
// looping dengan for atau while-do.


function pertumbuhan(jumlahPeduduk, pertumbuhan, maxPenduduk) {
    let tahun = 0;
    // let tempPenduduk = jumlahPeduduk;

    // kalau pakai for looping
    // for (let index = jumlahPeduduk; index < maxPenduduk; index = jumlahPeduduk) {
    //     jumlahPeduduk = jumlahPeduduk + (pertumbuhan / 100) * jumlahPeduduk;
    //     tahun++;
    // }

    while (jumlahPeduduk <= maxPenduduk) {
        jumlahPeduduk = jumlahPeduduk + (pertumbuhan / 100) * jumlahPeduduk;
        // if (jumlahPeduduk >= maxPenduduk) {
        //     jumlahPeduduk = tempPenduduk;
        //     break;
        // }
        // tempPenduduk = jumlahPeduduk;
        tahun++;
    }
    // karna pakai while maka looping akan di lakukan minimal sekali
    return `sekitar ${tahun} tahun jumlah penduduk di kota Bogor sebesar ${jumlahPeduduk} atau sekitar ${maxPenduduk}`;
}

console.log(pertumbuhan(30000, 3, 100000));