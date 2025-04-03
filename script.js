function swapValues(x, y) {
    // Swap the values using array destructuring
    [x, y] = [y, x];

    // Return the swapped values as an array
    return [x, y];
}

// Example usage:
const x = 5;
const y = 10;
const swapped = swapValues(x, y);

console.log(swapped);  
// Output: [10, 5]
