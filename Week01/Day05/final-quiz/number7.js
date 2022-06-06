//soal 7
function countingValleys(s) {
	//buat isi function untuk menentukan nilai countingValleys di console jika D = -1 dan U = +1
	//jika total nilai akhir adalah 0 dan U maka = +1 
    let hasil = 0;
    // let history = [0];
    let arr = s.split('');
    for (let index = 0; index <= arr.length; index++) {
        if (arr[index] == 'U') {
            if (index == arr.length-1) {
                // console.log("oke");
                hasil += 1;
                // history.push('U terakhir +1 == ' +hasil);
            }
            hasil += 1;
            // history.push('U +1 == ' +hasil);
        }else if (arr[index] == 'D') {
            hasil -= 1;
            // history.push('U -1 == ' +hasil);
        }
        // console.log(hasil);
    }
    // console.log(history);
    return hasil
}
console.log(countingValleys('UDDDUDUU'));//1
