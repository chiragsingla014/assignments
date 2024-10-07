/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {

    const current = new Date();
    let ms = current.getTime();
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum = sum + i;
    }
    console.log(`The sum is ${sum}`);

    const current2 = new Date();
    let ms2 = current2.getTime();
    console.log(`time taken ${ms2 - ms}`);
}

calculateTime(100);
calculateTime(100000);
calculateTime(1000000000);