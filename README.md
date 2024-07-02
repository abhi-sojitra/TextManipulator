## TextManipulator

**TextManipulator** is a versatile JavaScript package designed to handle various text formatting needs. Whether you're working with names, sentences, or any other text data, TextManipulator provides a suite of functions to help you clean, format, and transform your strings with ease.

### Features

- **Name Formatting**: Capitalize names, join first and last names, remove underscores, and more.
- **String Cleaning**: Remove unwanted characters, trim whitespace, and standardize text.
- **Case Conversion**: Convert text to uppercase, lowercase, title case, etc.
- **Text Transformation**: Apply custom transformations to your text data.

### Installation

You can install TextManipulator via npm:

```bash
npm install textmanipulator
```

### Usage

Here is an example of how to use TextManipulator in your JavaScript project:

```javascript
const TextManipulator = require("textmanipulator");

// Example usage
const name = TextManipulator.formatName("john_doe");
const cleanedText = TextManipulator.cleanString("  Hello, World!  ");
const titleCaseText = TextManipulator.toTitleCase("hello world");
const snakeCaseText = TextManipulator.toSnakeCase("Hello World");
const camelCaseText = TextManipulator.toCamelCase("hello world");
const reversedText = TextManipulator.reverseString("Hello World");
const isPalindromeText = TextManipulator.isPalindrome(
  "A man a plan a canal Panama"
);
const kebabCaseText = TextManipulator.toKebabCase("Hello World");
const upperCaseText = TextManipulator.toUpperCase("hello world");
const lowerCaseText = TextManipulator.toLowerCase("HELLO WORLD");
const capitalizeFirstText = TextManipulator.capitalizeFirst("hello world");
const removeVowelsText = TextManipulator.removeVowels("Hello World");
const removeConsonantsText = TextManipulator.removeConsonants("Hello World");
const repeatedText = TextManipulator.repeatString("Hello", 3);
const truncatedText = TextManipulator.truncateString("Hello World", 5);
const paddedText = TextManipulator.padString("Hello", " ", 10);
const containsSubstringText = TextManipulator.containsSubstring(
  "Hello World",
  "World"
);
const replacedAllText = TextManipulator.replaceAll("Hello World", "o", "a");
const splitByCommaText = TextManipulator.splitByComma("Hello,World,JavaScript");
const removeNumbersText = TextManipulator.removeNumbers("Hello123");
const extractNumbersText = TextManipulator.extractNumbers("Hello123 World456");
const removePunctuationText =
  TextManipulator.removePunctuation("Hello, World!");
const isUpperCaseText = TextManipulator.isUpperCase("HELLO WORLD");
const isLowerCaseText = TextManipulator.isLowerCase("hello world");
const countWordsText = TextManipulator.countWords("Hello World");
const countCharactersText = TextManipulator.countCharacters("Hello World");
const countVowelsText = TextManipulator.countVowels("Hello World");
const countConsonantsText = TextManipulator.countConsonants("Hello World");
const countDigitsText = TextManipulator.countDigits("Hello123");
const startsWithText = TextManipulator.startsWith("Hello World", "Hello");
const endsWithText = TextManipulator.endsWith("Hello World", "World");
const repeatEachCharacterText = TextManipulator.repeatEachCharacter("Hello", 2);
const removeDuplicateCharactersText =
  TextManipulator.removeDuplicateCharacters("Hello World");
const removeWhitespaceText = TextManipulator.removeWhitespace("Hello World");
const insertStringText = TextManipulator.insertString(
  "Hello World",
  "Beautiful ",
  6
);
const pascalCaseText = TextManipulator.toPascalCase("hello world");
const dotCaseText = TextManipulator.toDotCase("Hello World");
const toggleCaseText = TextManipulator.toggleCase("Hello World");
const swapCaseText = TextManipulator.swapCase("Hello World");
const shuffledStringText = TextManipulator.shuffleString("Hello World");
const sortedCharactersText = TextManipulator.sortCharacters("Hello World");
const isAnagramText = TextManipulator.isAnagram("listen", "silent");
const containsOnlyLettersText = TextManipulator.containsOnlyLetters("Hello");
const containsOnlyNumbersText = TextManipulator.containsOnlyNumbers("12345");
const containsOnlyAlphanumericText =
  TextManipulator.containsOnlyAlphanumeric("Hello123");
const convertTabsToSpacesText = TextManipulator.convertTabsToSpaces(
  "\tHello\tWorld",
  4
);
const convertSpacesToTabsText = TextManipulator.convertSpacesToTabs(
  "    Hello    World",
  4
);
const escapeHTMLText = TextManipulator.escapeHTML("<div>Hello World</div>");
const unescapeHTMLText = TextManipulator.unescapeHTML(
  "&lt;div&gt;Hello World&lt;/div&gt;"
);
const stripHTMLTagsText = TextManipulator.stripHTMLTags(
  "<div>Hello World</div>"
);

console.log(name); // Output: John Doe
console.log(cleanedText); // Output: Hello, World!
console.log(titleCaseText); // Output: Hello World
console.log(snakeCaseText); // Output: hello_world
console.log(camelCaseText); // Output: helloWorld
console.log(reversedText); // Output: dlroW olleH
console.log(isPalindromeText); // Output: true
console.log(kebabCaseText); // Output: hello-world
console.log(upperCaseText); // Output: HELLO WORLD
console.log(lowerCaseText); // Output: hello world
console.log(capitalizeFirstText); // Output: Hello world
console.log(removeVowelsText); // Output: Hll Wrld
console.log(removeConsonantsText); // Output: eo oo
console.log(repeatedText); // Output: HelloHelloHello
console.log(truncatedText); // Output: Hello...
console.log(paddedText); // Output:      Hello
console.log(containsSubstringText); // Output: true
console.log(replacedAllText); // Output: Hella Warld
console.log(splitByCommaText); // Output: ['Hello', 'World', 'JavaScript']
console.log(removeNumbersText); // Output: Hello
console.log(extractNumbersText); // Output: ['123', '456']
console.log(removePunctuationText); // Output: Hello World
console.log(isUpperCaseText); // Output: true
console.log(isLowerCaseText); // Output: true
console.log(countWordsText); // Output: 2
console.log(countCharactersText); // Output: 11
console.log(countVowelsText); // Output: 3
console.log(countConsonantsText); // Output: 7
console.log(countDigitsText); // Output: 3
console.log(startsWithText); // Output: true
console.log(endsWithText); // Output: true
console.log(repeatEachCharacterText); // Output: HHeelllloo
console.log(removeDuplicateCharactersText); // Output: Helo Wrd
console.log(removeWhitespaceText); // Output: HelloWorld
console.log(insertStringText); // Output: Hello Beautiful World
console.log(pascalCaseText); // Output: HelloWorld
console.log(dotCaseText); // Output: hello.world
console.log(toggleCaseText); // Output: hELLO wORLD
console.log(swapCaseText); // Output: hELLO wORLD
console.log(shuffledStringText); // Output: e.g. "W lldroHeol"
console.log(sortedCharactersText); // Output: " HdellloorW"
console.log(isAnagramText); // Output: true
console.log(containsOnlyLettersText); // Output: true
console.log(containsOnlyNumbersText); // Output: true
console.log(containsOnlyAlphanumericText); // Output: true
console.log(convertTabsToSpacesText); // Output: "    Hello    World"
console.log(convertSpacesToTabsText); // Output: "\tHello\tWorld"
console.log(escapeHTMLText); // Output: "&lt;div&gt;Hello World&lt;/div&gt;"
console.log(unescapeHTMLText); // Output: "<div>Hello World</div>"
console.log(stripHTMLTagsText); // Output: "Hello World"
```

### License

This project is licensed under the MIT License.
