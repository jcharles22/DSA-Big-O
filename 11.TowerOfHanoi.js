

function tower(n, from, to, middle) {
    let count =1;
    count ++;
    console.log(count)
    if(n === 1) {
        console.log(`Move disk 1 from rod ${from} to rod ${to}`)
        return;
    }

    tower(n-1, from, middle, to)
    console.log(`Move disk ${n} from rod ${from} to rod ${to}`)
    tower(n-1, middle, to, from);
    
}
let a ='A'
let b = 'B'
let c = 'C'

tower(4, a, c, b);

// O(2^n)