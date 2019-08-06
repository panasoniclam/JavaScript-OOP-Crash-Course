const Book = function(title,author,year){
    this.title = title;
    this.author = author;
    this.year = year 
      
    
}
Book.prototype.getSummary = function(){
     return `${this.title} ${this.author}  ${this.year}`
}

function Magazine(title,author,year,mouth){
    Book.call(this,title,author,year)
    this.mouth = mouth
}
Magazine.prototype = Object.create(Book.prototype);
Magazine.prototype.contructor = Magazine
const mag = new Magazine("sss","ddd","fff","ddd");
console.log(mag)