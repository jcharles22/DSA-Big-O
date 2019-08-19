//What is the Big O of the following algorithm? Explain your answer


function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}

// O(n^2) it loops through the whole array and for each index it loops through the 
// whole array again.
