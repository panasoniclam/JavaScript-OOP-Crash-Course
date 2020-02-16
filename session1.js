// const Book = function(title,author,year){
//     this.title = title;
//     this.author = author;
//     this.year = year 
      
    
// }
// Book.prototype.getSummary = function(){
//      return `${this.title} ${this.author}  ${this.year}`
// }
// Book.prototype.getyear = function(){
//     const year = new Date().getFullYear() - this.year
//         return `${this.title} is ${year} old`
// }
// Book.prototype.reverse = function(newyear){
//     this.year = newyear
//     this.reverse = true
// }
// const book1 = new Book("aaa","bb","2018")
// console.log(book1.getyear())
// console.log(book1.getSummary())
//  book1.reverse('2017') 
//  console.log(book1)

const Book = function(title){
    this.title = title
}
 const book1 = new Book("fff");
 Book.prototype.getSummary= function(){
     return `${this.title}`
 }
 const Magazine = function(title,author,year,mouth){
    Book.call(this,title,author,year)
    this.mouth = mouth
 }
Magazine.prototype = Object.create(Book.prototype)
Magazine.prototype.contructor = Magazine
const map = new Magazine("dd","dd","dd","ddd")
 