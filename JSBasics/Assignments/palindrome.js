
var isPalindrome = function(x) {
   if(x==reverseNumber(x)){
    return true;
   }else{
    return false;
   }
};

function reverseNumber(num) {
  return parseInt(num.toString().split('').reverse().join(''));
}

console.log(isPalindrome(-121))

console.log(isPalindrome(121))


console.log(isPalindrome(101))