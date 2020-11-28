// Write a function called repeatStr which repeats the given string exactly n times.
//
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

const repeatStr = (n, str) => {
  let strCount = ''
  for (let i = 0; i < n; i++){
    strCount += str;
  }
  return strCount;
}

console.log(repeatStr(6, "I")) // "IIIIII"
console.log(repeatStr(5, "Hello")) // "HelloHelloHelloHelloHello"