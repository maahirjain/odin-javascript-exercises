const removeFromArray = function(arr, ...args) {
    let newArr = arr;

    for(let i = 0; i < args.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === args[i]) {
                newArr.splice(j, 1);
                j--;
            }
        }
    }

    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
