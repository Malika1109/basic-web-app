export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew")) {
    return (
      "My andrew id is mdikshit"
    );
  }

  if (query.toLowerCase().includes("name")) {
    return (
      "Malika&BoushraNew"
    );
  }
  if (query.includes("plus")) {
    let num1;
    let num2;
    let result;
    num1 = parseInt(query.match(/\d+/g)![0]);
    num2 = parseInt(query.match(/\d+/g)![1]);
    result = (num1 + num2).toString();
    return (result);
  }

  if (query.includes("multiplied")) {
    let num1;
    let num2;
    let result;
    num1 = parseInt(query.match(/\d+/g)![0]);
    num2 = parseInt(query.match(/\d+/g)![1]);
    result = (num1 * num2).toString();
    return (result);
  }

  if (query.includes("largest")) {
    const numberPattern = /\d+/g;
    const numbers = query.match(numberPattern);

    if (numbers && numbers.length >= 3) {
        const num1 = parseInt(numbers[0], 10);
        const num2 = parseInt(numbers[1], 10);
        const num3 = parseInt(numbers[2], 10);
        const result = Math.max(num1, num2, num3).toString();
        return result;
    } 
  }

    // Function to check if a number is both a square and a cube
  function isSquareAndCube(number:number) {
    // Calculate the square root and cube root
    const squareRoot = Math.sqrt(number);
    const cubeRoot = Math.cbrt(number);

    // Check if both roots are integers
    return Number.isInteger(squareRoot) && Number.isInteger(cubeRoot);
  }
  
  if (query.includes("square")) {
    const numberPattern = /\d+/g;
    const numbers = query.match(numberPattern);
    if (numbers && numbers.length > 0){
    for (const number of numbers){
      if (isSquareAndCube(parseInt(number))){
        return number.toString();
      }
    }
  }
    return "nothing";

  }

  return "";
}


