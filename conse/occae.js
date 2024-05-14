// Using let for block scope and ensuring 'contentsInterval' is not already declared
let contentsInterval = contentsInterval || setInterval(() => {
  // Do something
}, 1000);
