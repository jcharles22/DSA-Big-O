//What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer



function isWhat(n) {
    if (n < 2 || n % 1 != 0) {
        return false;
    }
    //loops through all numbers from 2 to n-1 to see if anyone number has a remainder of 0
    for (let i = 2; i < n; ++i) {
        if (n % i == 0) return false;
    }
    return true;
}

//O(n) loops through number 2 through n to see if its a prime number. 