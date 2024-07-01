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
const TextManipulator = require('textmanipulator');

// Example usage
const name = TextManipulator.formatName("john_doe");
const cleanedText = TextManipulator.cleanString("  Hello, World!  ");
const titleCaseText = TextManipulator.toTitleCase("hello world");

console.log(name);            // Output: John Doe
console.log(cleanedText);     // Output: Hello, World!
console.log(titleCaseText);   // Output: Hello World
```

### License

This project is licensed under the MIT License.
