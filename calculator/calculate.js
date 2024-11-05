//todo add error handling when expression is passed empty
export function calculate(expression) {
    // Match numbers and operators
    const tokens = expression.match(/(\d+|\+|\-|\*|\/)/g);
  
    // Check if tokenization was successful
    if (!tokens) {
      throw new Error("Invalid expression");
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
          throw new Error("Invalid operator");
      }
    }
  
      return answer
  }