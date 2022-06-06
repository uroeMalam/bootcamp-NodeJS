//soal 14
/**
 *  Peminjaman komik di taman bacaan 
 *  hanya dibolehkan 3hari dihitung saat peminjaman,
 *  lebih dari 6 hari akan dikenakan denda sebesar
 *  Rp.500 tiap komik. biaya komik peminjaman Rp.2000/tiap komik.
 *  buat function dengan :
 *  totalKomikPinjam(starDate,endDate, totalkomik)
 *  startDate : tgl pinjam komik
 *  endDate : tgl kembalikan komik
 *  totalKomik : jumlah komik, maksimal 10 komik
 */

 function tagihanKomik(tglPinjam, tglKembali, totalkomik) {
    if (invalidDate(tglPinjam) && invalidDate(tglKembali)) {
        return `Tgl.Pinjam ${tglPinjam} & Tgl.Kembali ${tglKembali} not valid formated date`
    }else if (invalidDate(tglPinjam)) {
        return `Tgl.Pinjam ${tglPinjam} not valid formated date`
    }else if (invalidDate(tglKembali)) {
        return `Tgl.Kembali ${tglKembali} not valid formated date`
    }else{
        let hari = getDaybetweenDate(tglPinjam, tglKembali)
        return `\nTotal Hari = ${hari}\nTotal Komik = ${totalkomik} x 2500\n------------------------\nTotal Tagihan =Rp.${((totalkomik * 2500)*3)}`
    }

}

function getDaybetweenDate(startDate, endDate) {
    return Math.abs(new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24) // pake epoch time biar gampang
}

function invalidDate(date) {
    return new Date(date).toString() === 'Invalid Date'
}


console.log(tagihanKomik("09-03-20xx", "09-06-2021",4)); //Tgl.Pinjam 09-03-20xx not valid formated date
console.log(tagihanKomik("09-03-2021", "09-mm-2021",4));//Tgl.Kembali 09-mm-2021 not valid formated date
console.log(tagihanKomik("09-03-20xx", "09-mm-2021",4));//Tgl.Pinjam 09-03-20xx & Tgl.Kembali 09-mm-2021 not valid formated date
console.log(tagihanKomik("09-03-2021", "09-06-2021",4));
/**
 Total Hari = 3 
 Total Komik = 4 x 2500 
 ------------------------
 Total Tagihan =Rp.30000
 */