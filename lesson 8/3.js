function isPalindrome(str) {
    return str.toLowerCase() == str.split('').reverse().join('').toLowerCase();
}

isPalindrome('шалаШ');