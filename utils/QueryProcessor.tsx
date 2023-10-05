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

  return "";
}


