
//soal 15
/**
    Buat function untuk membayar cicilan angsuran rumah,
    diketahui angsuran rumah per bulan Rp.3.500.000,
    
    function payment(tglBayar,tglJatuhTempo,cicilan);
    jika penghuni telat membayar dari tgl jatuh tempo 
    akan dikenakan denda sebesar 2 mile/hari atau 2/1000 dari total angsuran.
    Pembayaran dapat dilakukan paling cepat 5 hari sebelum jatuh tempo.
 */

    function payment(tglBayar,tglJatuhTempo,cicilan){
        let hari = differenceInDays(tglBayar,tglJatuhTempo)
        if (cicilan < 3500000) {
            return `Angsuran anda kurang dari Rp 3.500.000,00. Silahkan isi sesuai angsuran`
        }else if(hari > 5){
            return `Tagihan bulan 8 belum tersedia`
        }else{
            let denda = 0
            if (hari < 0) { //kalau minus berarti kena denda
                denda = ((2/1000) *cicilan)* Math.abs(hari)
            }else{
                denda = 0
            }
            let angsuran = cicilan + denda
            return showTagihan(tglBayar,tglJatuhTempo,angsuran,cicilan,Math.abs(hari),denda)
        }
    } 
    
    function showTagihan(payDate,dueDate,angsuran,cicilan,terlambat,denda){ //angsuran uang yang dibayar termasuk denda, cicilan bayaran wajib tiap bulannya
        denda == 0 ? terlambat = 0 : terlambat = terlambat
        return `\n--------------------------\nTanggal Bayar : ${payDate}\nJatuh Tempo :  ${dueDate}\n--------------------------\nTagihan bulan ${dueDate.split('/')[0]},${dueDate.split('/')[2]} = Rp ${cicilan}\nDenda = Rp.${denda} (terlambat ${terlambat} hari)\nTotal = Rp.${angsuran} (lunas)\n--------------------------\nKwitansi ini sebagai alat bukti pembayaran`
    }
    
    function differenceInDays(startDate,endDate){
        return Math.floor(new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24) // pake epoch time biar gampang
    }
    
    console.log(payment("09/30/2021","09/27/2021",50000));//Angsuran anda kurang dari Rp 3.500.000,00. Silahkan isi sesuai angsuran
    console.log(payment("09/21/2021","09/27/2021",3500000));//Tagihan bulan 8 belum tersedia
    console.log(payment("09/27/2021","09/27/2021",3500000));
    /**
     --------------------------
            Tanggal Bayar : 27/9/2021
            Jatuh Tempo :  27/9/2021
            --------------------------
            Tagihan bulan 9,2021 = Rp.3500000 
            Denda = Rp.0 (terlambat 0 hari)
            Total = Rp.3500000 (lunas)
            --------------------------
            Kwitansi ini sebagai alat bukti pembayaran
     */