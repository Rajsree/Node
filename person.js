// const person = {
//     name : "Jon",
//     age : 30
// }

class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    greetings() {
        console.log("Hi my name is "+this.name);
    }
}
module.exports = Person;