//soal 8
function checkPermute(stringOne, stringTwo) {
	//buat isi function untuk menentukan nilai checkPermute di console jika length
	//kedua inputan tidak sama makan hasilnya false, dan jika length sama maka di cek apakah
	//jumlah kata dari masing2 inputan perjumlah sama atau tidak
    const one = stringOne.split('');
    const two = stringTwo.split('');
    if (one.length !== two.length) {
        return false;
    }else{
      if (one.sort().join('') == two.sort().join('')) {
        return true;
      }
      return false;
    }
}
console.log(checkPermute('aba', 'aab'))//true;
console.log(checkPermute('aba', 'aaba'))//false;
console.log(checkPermute('aba', 'aaa'))//false;
