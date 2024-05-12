function indexOfIgnoreCase(str, subStr) {
  const lowerCaseStr = str.toLowerCase();
  const lowerCaseSubStr = subStr.toLowerCase();
  return lowerCaseStr.indexOf(lowerCaseSubStr);
}
console.log(indexOfIgnoreCase("Hello World", "world")); // Output: 6
console.log(indexOfIgnoreCase("apple", "Ple")); // Output: 2
console.log(indexOfIgnoreCase("test", "aaa")); // Output: -1
// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
