//Create an object called as Book with the properties 
//as bookId, bookName, authorName, subject

// Create 5 different book object and store them in an array.

// in html create a textbox to input bookid and a button. On click of button,
//  fetch the other details for the book and display



function Book(bookId2,bookName2, authorName2, subject2){
    this.bookId = bookId2;
    this.bookName = bookName2;
    this.authorName = authorName2;
    this.subject = subject2;
}

// Create 5 different book object and store them in an array.
var cook = new Book(10, "Easy Cook Book", "Martha", "cook book")
var cartoon = new Book (11, "Spider man", "AI", "entertainment") 
var drama = new Book(12, "relationship", "CD", "drama book")
var travel = new Book (13, "Go Spain", "EF", "Travel Book") 


var arr = [cook, cartoon,drama, travel]



// craeate the function in which we will read the book id from taxt book
// then fetch the book details that match id
//search value which array  match
function checkBook(){
    var checkBookID = document.getElementById("putBookID").value
    //use loop go through the value in array line 25
    var flag = 0
    for (i=0; i < arr.length; i++){
        if (arr[i].bookId==checkBookID){
alert(arr[i].bookName+" , "+arr[i].subject + " , " + arr[i].authorName)
flag = 1 // if flag == 1 is means the book found coz change value from 0 to 1
break
        }
    }
    // if flag == 0 menas book not found coz not change value
    if (flag == 0){
        alert("book not found")

    }
  

    
}
