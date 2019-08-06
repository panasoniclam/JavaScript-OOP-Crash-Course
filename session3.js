const BookPros ={
    getSummary :function(){
     return `${this.title} ${this.author}  ${this.year}`
 },
 getAge:function(){
     const year = new Date().getFullYear()- this.year
     return `${this.year}  ${year}`
 }
}
 

//creare Object
// const book1 = Object.create(BookPros);
// book1.title = "boook one"
// book1.author = "ssss";
// book1.year ="2018";
// console.log(book1.getAge())
// console.log(book1.getSummary())
// console.log(book1)


const book1 = Object.create(BookPros,{
    title:{value:'bihdhd'},
    author:{value:'ssss'},
    year:{value:'2019'}
})
console.log(book1)