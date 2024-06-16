const palindromes = function (str) {
    let i = 0;
    let j = str.length - 1;

    while (i < j) {
        while (" .,:!?".includes(str.at(i))) { i++; }
        while (" .,:!?".includes(str.at(j))) { j--; }
        if (str.at(i).toLowerCase() === str.at(j).toLowerCase()) { i++; j--; }
        else { return false; }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
