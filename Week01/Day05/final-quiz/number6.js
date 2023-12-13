//soal 6
function isPalindrome(word){
	//buat isi function untuk menentukan nilai palindrome di console true atau false 
    let wordReversed = word.split('').reverse().join('');
    if(word.toLowerCase == wordReversed.toLowerCase){
        return true;
    }
    return false;
}
console.log(isPalindrome('kasur ini rUsak'));//true
