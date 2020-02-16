class Book {
    constructor(title,author,year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary(){
        return `${this.title} ${this.author} ${this.year}`
    }
    getAge(){
        const year = new Date().getFullYear()-this.year
        return `${this.title} is ${year} old`
    }
}

class book1 extends Book{
    constructor(title,author,year,mouth){
        super(title,author,year)
        this.mouth = mouth;
    }
    super().getSummary(){

    }
}
const a = new book1("dd","ddd","2018","jan")
console.log(a.getSummary())