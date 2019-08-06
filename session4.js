class Book {
    constructor(title,author,year){
        this.title = title ;
        this.author = author;
         this.year = year;
    }
    getSummary(){
        return `${this.title} ${this.author} ${this.year}`
    }
    getAge(){
        const year = new Date().getFullYear()-this.year
        return `${year}`
    }
    revise(newyear){
        this.year = newyear
        this.revised = true
    }
    static topBookStore(){
        return 'daaihihi'
    }
}

// //instania object
// const book1 = new Book("ddd","ddd","2019")
// console.log(book1.getSummary())
// console.log(book1.getAge())
// console.log(book1)
// console.log(Book.topBookStore())

class magazine extends Book{
    constructor(title,author,year,mouth){
        super(title,author,year)
        this.mouth = mouth
    }
}
const mag1 = new magazine('ddd','dddd','dddd','ddd')
console.log(mag1)