const repeatString = function(str, numOfRepetitions) {
    let repeatedString = "";

    if (numOfRepetitions < 0) {
        repeatedString = "ERROR";
    }

    for (let i = 0; i < numOfRepetitions; i++) {
        repeatedString += str;
    }

    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
