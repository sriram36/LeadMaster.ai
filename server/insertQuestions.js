require('./config/db');
const Question = require('./models/Question');


const questions = [
  { _id: 'q1', question: 'What is the capital of France?', options: [ 'Berlin', 'London', 'Paris', 'Madrid' ], answer: 'Paris' },
  { _id: 'q2', question: 'Which language runs in a web browser?', options: [ 'Java', 'C', 'Python', 'JavaScript' ], answer: 'JavaScript' },
  { _id: 'q3', question: 'What does CSS stand for?', options: [ 'Central Style Sheets', 'Cascading Style Sheets', 'Cascading Simple Sheets', 'Cars SUVs Sailboats' ], answer: 'Cascading Style Sheets' },
  { _id: 'q4', question: 'What year was JavaScript launched?', options: [ '1996', '1995', '1994', 'None of the above' ], answer: '1995' },
  { _id: 'q5', question: 'Who invented the World Wide Web?', options: [ 'Tim Berners-Lee', 'Bill Gates', 'Steve Jobs', 'Mark Zuckerberg' ], answer: 'Tim Berners-Lee' },
  { _id: 'q6', question: 'Which company developed React?', options: [ 'Google', 'Facebook', 'Microsoft', 'Amazon' ], answer: 'Facebook' },
  { _id: 'q7', question: 'What is the default port for HTTP?', options: [ '80', '443', '21', '25' ], answer: '80' },
  { _id: 'q8', question: 'Which HTML tag is used for the largest heading?', options: [ '<h1>', '<h6>', '<header>', '<head>' ], answer: '<h1>' },
  { _id: 'q9', question: 'Which symbol is used for comments in JavaScript?', options: [ '//', '/* */', '#', '<!-- -->' ], answer: '//' },
  { _id: 'q10', question: 'What does API stand for?', options: [ 'Application Programming Interface', 'Apple Pie Inc.', 'Advanced Program Integration', 'Applied Protocol Internet' ], answer: 'Application Programming Interface' },
  { _id: 'q11', question: 'Which is not a JavaScript framework?', options: [ 'React', 'Angular', 'Vue', 'Django' ], answer: 'Django' },
  { _id: 'q12', question: "What is the output of 2 + '2' in JavaScript?", options: [ '4', "'22'", 'NaN', 'undefined' ], answer: "'22'" },
  { _id: 'q13', question: 'Which method is used to parse a string to int in JavaScript?', options: [ 'parseInt()', 'parse()', 'int()', 'toInt()' ], answer: 'parseInt()' },
  { _id: 'q14', question: 'Which protocol is used to send emails?', options: [ 'SMTP', 'FTP', 'HTTP', 'SSH' ], answer: 'SMTP' },
  { _id: 'q15', question: 'Which is a NoSQL database?', options: [ 'MySQL', 'MongoDB', 'PostgreSQL', 'Oracle' ], answer: 'MongoDB' },
  { _id: 'q16', question: 'Which CSS property changes text color?', options: [ 'color', 'background-color', 'font-color', 'text-color' ], answer: 'color' },
  { _id: 'q17', question: 'Which is not a primitive data type in JavaScript?', options: [ 'String', 'Number', 'Boolean', 'Object' ], answer: 'Object' },
  { _id: 'q18', question: 'Which function is used to print in JavaScript?', options: [ 'console.log()', 'print()', 'echo()', 'write()' ], answer: 'console.log()' },
  { _id: 'q19', question: 'Which tag is used for a line break in HTML?', options: [ '<br>', '<lb>', '<break>', '<line>' ], answer: '<br>' },
  { _id: 'q20', question: 'Which company developed TypeScript?', options: [ 'Microsoft', 'Google', 'Facebook', 'Apple' ], answer: 'Microsoft' },
  { _id: 'q21', question: 'Which is not a valid variable name in JavaScript?', options: [ '2name', '_name', 'name2', '$name' ], answer: '2name' },
  { _id: 'q22', question: 'Which method removes the last element from an array?', options: [ 'pop()', 'push()', 'shift()', 'unshift()' ], answer: 'pop()' },
  { _id: 'q23', question: 'Which is used to style web pages?', options: [ 'HTML', 'CSS', 'JavaScript', 'SQL' ], answer: 'CSS' },
  { _id: 'q24', question: 'Which is not a valid HTML5 element?', options: [ '<section>', '<article>', '<footer>', '<blink>' ], answer: '<blink>' },
  { _id: 'q25', question: 'Which is used for version control?', options: [ 'Git', 'Node.js', 'NPM', 'Docker' ], answer: 'Git' },
  { _id: 'q26', question: 'Which is not a relational database?', options: [ 'MySQL', 'MongoDB', 'PostgreSQL', 'SQLite' ], answer: 'MongoDB' },
  { _id: 'q27', question: 'Which is used to create a server in Node.js?', options: [ 'http', 'fs', 'os', 'path' ], answer: 'http' },
  { _id: 'q28', question: 'Which is not a valid CSS unit?', options: [ 'px', 'em', 'rem', 'rpm' ], answer: 'rpm' },
  { _id: 'q29', question: 'Which is used to fetch data in React?', options: [ 'useEffect', 'useState', 'useFetch', 'useData' ], answer: 'useEffect' },
  { _id: 'q30', question: 'Which is not a JavaScript loop?', options: [ 'for', 'while', 'do-while', 'repeat' ], answer: 'repeat' },
  { _id: 'q31', question: 'Which is used to store key-value pairs?', options: [ 'Array', 'Object', 'String', 'Number' ], answer: 'Object' },
  { _id: 'q32', question: 'Which is not a valid HTTP method?', options: [ 'GET', 'POST', 'PUT', 'SEND' ], answer: 'SEND' },
  { _id: 'q33', question: 'Which is used to declare a constant in JavaScript?', options: [ 'const', 'var', 'let', 'constant' ], answer: 'const' },
  { _id: 'q34', question: 'Which is not a frontend framework?', options: [ 'React', 'Angular', 'Vue', 'Express' ], answer: 'Express' },
  { _id: 'q35', question: 'Which is used to run JavaScript outside the browser?', options: [ 'Node.js', 'React', 'Angular', 'Vue' ], answer: 'Node.js' },
  { _id: 'q36', question: 'Which is not a valid JSON value?', options: [ 'String', 'Number', 'Function', 'Boolean' ], answer: 'Function' },
  { _id: 'q37', question: 'Which is used to create animations in CSS?', options: [ '@keyframes', '@media', '@import', '@font-face' ], answer: '@keyframes' },
  { _id: 'q38', question: 'Which is not a valid JavaScript operator?', options: [ '+', '-', '*', '+++' ], answer: '+++' },
  { _id: 'q39', question: 'Which is used to make HTTP requests in JavaScript?', options: [ 'fetch', 'console.log', 'alert', 'prompt' ], answer: 'fetch' },
  { _id: 'q40', question: 'Which is not a valid React hook?', options: [ 'useState', 'useEffect', 'useFetch', 'useContext' ], answer: 'useFetch' },
  { _id: 'q41', question: 'Which is used to define a function in JavaScript?', options: [ 'function', 'def', 'func', 'define' ], answer: 'function' },
  { _id: 'q42', question: 'Which is not a valid HTML attribute?', options: [ 'class', 'id', 'style', 'srcipt' ], answer: 'srcipt' },
  { _id: 'q43', question: 'Which is used to import modules in ES6?', options: [ 'import', 'require', 'include', 'load' ], answer: 'import' },
  { _id: 'q44', question: 'Which is not a valid CSS selector?', options: [ '.class', '#id', 'element', '$selector' ], answer: '$selector' },
  { _id: 'q45', question: 'Which is used to create a list in HTML?', options: [ '<ul>', '<li>', '<ol>', 'All of the above' ], answer: 'All of the above' },
  { _id: 'q46', question: 'Which is not a valid JavaScript array method?', options: [ 'map', 'filter', 'reduce', 'multiply' ], answer: 'multiply' },
  { _id: 'q47', question: 'Which is used to style React components?', options: [ 'CSS', 'Styled-components', 'Material UI', 'All of the above' ], answer: 'All of the above' },
  { _id: 'q48', question: 'Which is not a valid HTML event?', options: [ 'onclick', 'onchange', 'onhover', 'onload' ], answer: 'onhover' },
  { _id: 'q49', question: 'Which is used to store data in the browser?', options: [ 'localStorage', 'sessionStorage', 'cookies', 'All of the above' ], answer: 'All of the above' },
  { _id: 'q50', question: 'Which is not a valid JavaScript keyword?', options: [ 'let', 'var', 'const', 'define' ], answer: 'define' }
];

async function insertQuestions() {
  try {
    await Question.insertMany(questions, { ordered: false });
    console.log('Questions inserted!');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

insertQuestions();
