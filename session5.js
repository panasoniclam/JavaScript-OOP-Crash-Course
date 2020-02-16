class Person {
    constructor(name){
        this.name = name;
        this.age = 23;
         
    }
    getSummary(){
        return `${this.name} ${this.age}`
    }


}

class Employee extends Person {
    constructor(collection){
        super(name,age)
        this.collection = collection
    }
}
const employee = new Employee("ddd")