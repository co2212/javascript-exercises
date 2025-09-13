const fibonacci = function(num) {
    if (num < 0) return "OOPS";
    if (+num == 0) return 0;
    
    let arr = [1, 1];

    for (let i = 2; i < +num; i++) {
        arr.push(arr[i-2] + arr[i-1]);
    }

    return arr[+num-1]
};

// Do not edit below this line
module.exports = fibonacci;
