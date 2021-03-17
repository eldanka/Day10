var myPet = {
    species: "Stafford",
    name : "Ringo",
    legs: 4,
    friends: ["John", "Paul"]
};

function myFunction(myObj) {
    return myObj;
}

console.log(myFunction(myPet));
module.exports = { myPet, myFunction };