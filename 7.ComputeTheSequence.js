//What does the following algorithm do? 
//What is its runtime complexity? Explain your answer

function compute(num) {
    let result = [];
    //loop 1 through the num inputed into the function
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i == 2) {
            result.push(1);
        }
        else {
            //result[i-2] is the last number to be pushed to result
            //result[i-3] is the the next to last number in the array reslut
            //push the sum of the 2 indexes. 
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}

// O(n) because it loops from 1 to num one time. 

