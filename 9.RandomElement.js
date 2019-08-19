//What is the Big O of the following algorithm? Explain your answer

function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// O(1) because it returns a random element from the array it doesnt loop through the array
// and the size of the array has no effect on it.