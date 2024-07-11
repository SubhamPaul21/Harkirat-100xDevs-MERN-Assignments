/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let largestNum = numbers[0];

    for (let number of numbers) {
        if (number > largestNum) {
            largestNum = number;
        }
    }

    return largestNum;
}

// console.log(findLargestElement([3, 7, 2, 9, 1]));

module.exports = findLargestElement;