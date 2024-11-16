export function calculate(expression) {
  const res = document.querySelector('.result');
  
  // Check if the expression is empty
  if (!expression.trim()) {
      res.textContent = "Please enter a valid expression";
      return "Invalid input";
  }
  
  // Match numbers (including decimals) and operators
  const tokens = expression.match(/(\d+(\.\d+)?|\+|\-|\*|\/)/g);
  
  // Check if tokenization was successful
  if (!tokens) {
      res.textContent = "Invalid expression";
      return "Invalid input";
  }

  // Parse the first number
  let answer = parseFloat(tokens[0]);

  // Iterate over the operators and the following numbers
  for (let i = 1; i < tokens.length; i += 2) {
      const operator = tokens[i];
      const nextNumber = parseFloat(tokens[i + 1]);

      // Perform the calculation based on the operator
      switch (operator) {
          case "+":
              answer += nextNumber;
              break;
          case "-":
              answer -= nextNumber;
              break;
          case "*":
              answer *= nextNumber;
              break;
          case "/":
              answer /= nextNumber;
              break;
          default:
              res.textContent = "Invalid operator";
              return "Invalid input";
      }
  }

  return answer;
}
 