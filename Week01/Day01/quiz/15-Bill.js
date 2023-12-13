/** hitung total gaji karyawan */

function totalGaji(gaji1, gaji2, gaji3) {
    // tax1 = taxGaji(gaji1);
    // tax2 = taxGaji(gaji2);
    // tax3 = taxGaji(gaji3);
    
    // emp1 = gaji1 + (gaji1 * tax1);
    // emp2 = gaji2 + (gaji2 * tax2);
    // emp3 = gaji3 + (gaji3 * tax3);
    
    // total = emp1 + emp2 + emp3;

    // return `Total gaji yang harus dibayar :  \nEmp1 : Rp.${gaji1} + Pajak(${tax1*100}%)=Rp.${emp1} \nEmp1 : Rp.${gaji2} + Pajak(${tax2*100}%)=Rp.${emp2}\nEmp1 : Rp.${gaji3} + Pajak(${tax3*100}%)=Rp.${emp3}\nTotal : Rp.${total}`;

    var array = [gaji1, gaji2, gaji3];
    var total = 0;
    var text = '';
    for (var i = 0; i < array.length; i++) {
        var tax = taxGaji(array[i]);
        var emp = array[i] + (array[i] * tax);
        var text = `${text}Emp${i+1} : Rp.${array[i]} + Pajak(${tax*100}%)=Rp.${emp}\n`;
        var total = total + emp;
    }
    return `Total gaji yang harus dibayar :  \n${text}Total : Rp.${total}`;
}

function taxGaji(gaji) {
    if (gaji >= 10000) {
        return (10 / 100).toFixed(2)
    } else if (gaji >= 1000 && gaji < 10000) {
        return (5 / 100).toFixed(2)
    } else if (gaji >= 100 && gaji < 1000) {
        return (2 / 100).toFixed(2)
    }
}

console.log(totalGaji(500, 2000, 12000));
/**
    Total gaji yang harus dibayar :  
    Emp1 : Rp.500 + Pajak(2%)=Rp.510
    Emp1 : Rp.2000 + Pajak(5%)=Rp.2100
    Emp1 : Rp.12000 + Pajak(10%)=Rp.13200
    Total : Rp.15810
 */