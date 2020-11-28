// isMatching checks if a string can be created by combining and rearranging the letters of two other strings (not case sensitive).

// !Spaces will be ignored but special characters and numbers won't match the string and return false.

// For example:
// isMatching("email box", "b aIl", "Mo x e") return true
// but
// isMatching("bouh", "0b", "uh") return false

// You need to be able to use all the caracters from the two strings so:
// isMatching("kata", "kt", "aaa") return false

function isMatching(string, str1, str2) {
    var checkStr1 = sortString(string)
    var checkStr2 = sortString(str1+str2)
    
    return checkStr1 === checkStr2
}

function sortString(s){
    return s.toLowerCase().split(' ').join('').split('').sort().join('')
}

isMatching("email box", "b aIl", "Mo x e")