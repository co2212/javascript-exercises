const findTheOldest = function(people) {
    return oldest = people.reduce((currOldest, person) => {
        const endYearPrev = "yearOfDeath" in currOldest
            ? currOldest.yearOfDeath : new Date().getFullYear();
        const currYearPrev = "yearOfDeath" in currOldest
            ? person.yearOfDeath : new Date().getFullYear();

        if (endYearPrev - currOldest.yearOfBirth < currYearPrev - person.yearOfBirth) {
            return person;
        }

        return currOldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
