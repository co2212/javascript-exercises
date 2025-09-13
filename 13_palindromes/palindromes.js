const palindromes = function (string) {
    const arrNoPunctuation = Array.from(string)
        .filter(char => !(char == ' ' || char == '!' || char == '.' || char == ','));

    const reverseArr = arrNoPunctuation.reverse();

    return arrNoPunctuation.join("") === reverseArr.join("");
};

// Do not edit below this line
module.exports = palindromes;
