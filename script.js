function firstNonRepeatedChar(str) {
  // Create an empty object to store character counts
  const charCount = {};

  // Loop through the string and count the occurrences of each character
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Loop through the string again to find the first non-repeated character
  for (const char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  // If no non-repeated character is found, return null
  return null;
}

// Test cases
console.log(firstNonRepeatedChar('aabbcdd')); // Output: 'c'
console.log(firstNonRepeatedChar('aabbcc'));  // Output: null

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
