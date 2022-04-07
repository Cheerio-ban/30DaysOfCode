arr1 = [4, 10, 6, 9, 15, 18]




const FizzBuzz1 = (arr) => {
    counter = [];
    counter1 = [];
    for (let i = 0; i < arr.length; i++) {
        for(let i = 1; i <= arr[i]; i++){
            if (i % 3 === 0 && i % 5 === 0) {
                counter.push('FizzBuzz');
            }else if (i % 3 === 0){
                counter.push('Fizz');
            }else if (i % 5 === 0){
                counter.push('Buzz');
            }else {
                counter.push(i);
            }
            counter1.push(counter);
            counter = []
        }
    return counter1;
}

FizzBuzz1(arr1);
