export default function repeatArray(arr: any[], targetLength = 5) {
  const result = [];

  // Repeat the array elements until the result has 5 elements
  for (let i = 0; i < targetLength; i++) {
    result.push(arr[i % arr.length]);
  }

  return result;
}

// Examples
// console.log(repeatArray([1])); // Output: [1, 1, 1, 1, 1]
// console.log(repeatArray([1, 2])); // Output: [1, 2, 1, 2, 1]
// console.log(repeatArray([1, 2, 3, 4])); // Output: [1, 2, 3, 4, 1]
// console.log(repeatArray([1, 2, 3, 4, 5])); // Output: [1, 2, 3, 4, 5]
