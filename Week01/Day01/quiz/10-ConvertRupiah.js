/**
 * Convert rupiah to other currency
 */

function convertToRupiah(money,type){
    if(type == 'yen'){
        mataUang = `yen`;
        idr=money*130.12;
    }else if(type == 'usd'){
        mataUang = `dollar`;
        idr=money*14382.5;
    }else if(type == 'euro'){
        mataUang = `dollar`;
        idr=money*16000;
    }else{
        return `no match type currency`;
    }
    idr = new Intl.NumberFormat('ID',{style:'currency',currency:'IDR'}).format(idr);
    return `${money} ${mataUang}  = ${idr}`;
    
}

console.log(convertToRupiah(1000,'yen'));//1000 yen  = Rp.130.120
console.log(convertToRupiah(100,'usd'));//100 dollar  = Rp.1.438.250
console.log(convertToRupiah(100,'euro'));//100 dollar  = Rp.1.600.000
console.log(convertToRupiah(100,''));//no match type currency