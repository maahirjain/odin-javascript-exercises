const findTheOldest = function(arr) {
    return arr.reduce((oldestPerson, currentPerson) => {
        if (!("yearOfDeath" in oldestPerson)) { 
            oldestPerson.yearOfDeath = new Date().getFullYear(); 
        }

        if (!("yearOfDeath" in currentPerson)) { 
            currentPerson.yearOfDeath = new Date().getFullYear(); 
        }

        currentPersonAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth;
        oldestPersonAge = oldestPerson.yearOfDeath - oldestPerson.yearOfBirth;

        if (currentPersonAge > oldestPersonAge) { return currentPerson; }
        else { return oldestPerson; }
    }, arr[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
