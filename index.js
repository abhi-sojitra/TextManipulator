// Function to format a name by capitalizing each part and joining with a space
function formatName(name) {
  return name
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

// Function to clean a string by trimming whitespace
function cleanString(str) {
  return str.trim();
}

// Function to convert a string to title case
function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Function to replace spaces with underscores (snake_case)
function toSnakeCase(str) {
  return str.trim().toLowerCase().replace(/\s+/g, "_");
}

// Function to convert a string to camelCase
function toCamelCase(str) {
  return str
    .trim()
    .split(/\s+/)
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join("");
}

// Function to reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Function to check if a string is a palindrome
function isPalindrome(str) {
  const cleaned = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return cleaned === cleaned.split("").reverse().join("");
}

// Function to replace spaces with hyphens (kebab-case)
function toKebabCase(str) {
  return str.trim().toLowerCase().replace(/\s+/g, "-");
}

// Function to convert a string to uppercase
function toUpperCase(str) {
  return str.toUpperCase();
}

// Function to convert a string to lowercase
function toLowerCase(str) {
  return str.toLowerCase();
}

// Function to capitalize the first letter of a string
function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Function to remove vowels from a string
function removeVowels(str) {
  return str.replace(/[aeiouAEIOU]/g, "");
}

// Function to remove consonants from a string
function removeConsonants(str) {
  return str.replace(/[^aeiouAEIOU]/g, "");
}

// Function to repeat a string a specified number of times
function repeatString(str, num) {
  return str.repeat(num);
}

// Function to truncate a string to a specified length
function truncateString(str, length) {
  return str.length > length ? str.slice(0, length) + "..." : str;
}

// Function to pad a string with another string until a specified length
function padString(str, pad, length) {
  while (str.length < length) {
    str = pad + str;
  }
  return str;
}

// Function to check if a string contains a substring
function containsSubstring(str, substring) {
  return str.includes(substring);
}

// Function to replace all occurrences of a substring with another substring
function replaceAll(str, find, replace) {
  return str.split(find).join(replace);
}

// Function to split a string by commas
function splitByComma(str) {
  return str.split(",");
}

// Function to remove numbers from a string
function removeNumbers(str) {
  return str.replace(/[0-9]/g, "");
}

// Function to extract numbers from a string
function extractNumbers(str) {
  return str.match(/[0-9]+/g);
}

// Function to remove punctuation from a string
function removePunctuation(str) {
  return str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
}

// Function to check if a string is uppercase
function isUpperCase(str) {
  return str === str.toUpperCase();
}

// Function to check if a string is lowercase
function isLowerCase(str) {
  return str === str.toLowerCase();
}

// Function to count the number of words in a string
function countWords(str) {
  return str.trim().split(/\s+/).length;
}

// Function to count the number of characters in a string
function countCharacters(str) {
  return str.length;
}

// Function to count the number of vowels in a string
function countVowels(str) {
  const match = str.match(/[aeiouAEIOU]/g);
  return match ? match.length : 0;
}

// Function to count the number of consonants in a string
function countConsonants(str) {
  const match = str.match(/[^aeiouAEIOU\s]/g);
  return match ? match.length : 0;
}

// Function to count the number of digits in a string
function countDigits(str) {
  const match = str.match(/[0-9]/g);
  return match ? match.length : 0;
}

// Function to check if a string starts with a specified substring
function startsWith(str, prefix) {
  return str.startsWith(prefix);
}

// Function to check if a string ends with a specified substring
function endsWith(str, suffix) {
  return str.endsWith(suffix);
}

// Function to repeat each character in a string
function repeatEachCharacter(str, num) {
  return str
    .split("")
    .map((char) => char.repeat(num))
    .join("");
}

// Function to remove duplicate characters from a string
function removeDuplicateCharacters(str) {
  return Array.from(new Set(str.split(""))).join("");
}

// Function to remove all whitespace from a string
function removeWhitespace(str) {
  return str.replace(/\s+/g, "");
}

// Function to insert a string at a specified position
function insertString(str, insert, position) {
  return str.slice(0, position) + insert + str.slice(position);
}

// Function to convert a string to PascalCase
function toPascalCase(str) {
  return str
    .trim()
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");
}

// Function to replace spaces with dots (dot.case)
function toDotCase(str) {
  return str.trim().toLowerCase().replace(/\s+/g, ".");
}

// Function to toggle the case of each character in a string
function toggleCase(str) {
  return str
    .split("")
    .map((char) =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    )
    .join("");
}

// Function to swap the case of each character in a string
function swapCase(str) {
  return str
    .split("")
    .map((char) =>
      char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()
    )
    .join("");
}

// Function to shuffle the characters in a string
function shuffleString(str) {
  return str
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
}

// Function to sort the characters in a string
function sortCharacters(str) {
  return str.split("").sort().join("");
}

// Function to check if two strings are anagrams
function isAnagram(str1, str2) {
  const normalize = (str) =>
    str
      .replace(/[^a-zA-Z0-9]/g, "")
      .toLowerCase()
      .split("")
      .sort()
      .join("");
  return normalize(str1) === normalize(str2);
}

// Function to check if a string contains only letters
function containsOnlyLetters(str) {
  return /^[a-zA-Z]+$/.test(str);
}

// Function to check if a string contains only numbers
function containsOnlyNumbers(str) {
  return /^[0-9]+$/.test(str);
}

// Function to check if a string contains only letters and numbers
function containsOnlyAlphanumeric(str) {
  return /^[a-zA-Z0-9]+$/.test(str);
}

// Function to convert tabs to spaces in a string
function convertTabsToSpaces(str, spaces = 4) {
  return str.replace(/\t/g, " ".repeat(spaces));
}

// Function to convert spaces to tabs in a string
function convertSpacesToTabs(str, spaces = 4) {
  return str.replace(new RegExp(" ".repeat(spaces), "g"), "\t");
}

// Function to escape HTML characters in a string
function escapeHTML(str) {
  const escapeChars = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return str.replace(/[&<>"']/g, (char) => escapeChars[char]);
}

// Function to unescape HTML characters in a string
function unescapeHTML(str) {
  const unescapeChars = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#039;": "'",
  };
  return str.replace(/&(amp|lt|gt|quot|#039);/g, (char) => unescapeChars[char]);
}

// Function to strip HTML tags from a string
function stripHTMLTags(str) {
  return str.replace(/<\/?[^>]+(>|$)/g, "");
}

// Exporting functions to be used by other modules
module.exports = {
  formatName,
  cleanString,
  toTitleCase,
  toSnakeCase,
  toCamelCase,
  reverseString,
  isPalindrome,
  toKebabCase,
  toUpperCase,
  toLowerCase,
  capitalizeFirst,
  removeVowels,
  removeConsonants,
  repeatString,
  truncateString,
  padString,
  containsSubstring,
  replaceAll,
  splitByComma,
  removeNumbers,
  extractNumbers,
  removePunctuation,
  isUpperCase,
  isLowerCase,
  countWords,
  countCharacters,
  countVowels,
  countConsonants,
  countDigits,
  startsWith,
  endsWith,
  repeatEachCharacter,
  removeDuplicateCharacters,
  removeWhitespace,
  insertString,
  toPascalCase,
  toDotCase,
  toggleCase,
  swapCase,
  shuffleString,
  sortCharacters,
  isAnagram,
  containsOnlyLetters,
  containsOnlyNumbers,
  containsOnlyAlphanumeric,
  convertTabsToSpaces,
  convertSpacesToTabs,
  escapeHTML,
  unescapeHTML,
  stripHTMLTags,
};
