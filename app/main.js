"use strict";

function fizzbuzz(n) {
  if (n % 15 === 0) return "FizzBuzz";
  if (n % 5 === 0)  return "Buzz";
  if (n % 3 === 0)  return "Fizz";
  return n.toString();
}

function main(args, options) {
  console.log(fizzbuzz(args[0]));
}

module.exports = main;
