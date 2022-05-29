
function isPalindrome(word){
    wordReversed = word.split('').reverse().join('');
    if(word.toLowerCase == wordReversed.toLowerCase){
        return true;
    }
    return false;

}

console.log(isPalindrome('kasur ini rUsak'));//true