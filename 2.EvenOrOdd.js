//What is the Big O of the following algorithm? Explain your answer

function isEven(value) {
    if (value % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}


// O(n) because no matter how big the number is it only get excuted once