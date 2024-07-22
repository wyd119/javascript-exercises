// const people = [
//     {
//         name: "Ray",
//         yearOfBirth: 1962,
//         yearOfDeath: 1963,
//     },
//     {
//         name: "Carly",
//         yearOfBirth: 1942,
//         yearOfDeath: 1944,
//     },

//     {
//         name: "Jane",
//         yearOfBirth: 1912,
//         yearOfDeath: 1915,
//     },
//   ]


function sortByAge(a,b){
        if(!a['yearOfDeath']){
            const currentYear = new Date().getFullYear();
            a['yearOfDeath']=currentYear;
        }
        if(!b['yearOfDeath']){
            const currentYear = new Date().getFullYear();
            b['yearOfDeath']=currentYear;
        }
        ageA = a['yearOfDeath'] - a['yearOfBirth'];
        ageB = b['yearOfDeath'] - b['yearOfBirth'];
        let output = ageA>ageB ? 1 : -1;
        return output;
    }

const findTheOldest = function(people) {
    let sorted = people.sort(sortByAge);
    return (sorted.pop());
};

// console.log(findTheOldest(people));

// console.log(sortByAge(people[0],people[1]));

// Do not edit below this line
module.exports = findTheOldest;
