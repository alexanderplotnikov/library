const formGet = document.querySelector("#formGet");

let myLibrary = [];

function Book() {
    // the constructor
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;

}

function addBookToLibrary() {  
    let userBook = new Book()
    myLibrary.push(userBook)
} 
let form1 = document.getElementById("form_id")
form1.reset();
console.log(form1)
let submitBtn = document.querySelector("#addBook");
submitBtn.addEventListener("click", () => {
    author = document.querySelector("#author").value;
    title = document.querySelector("#title").value;
    pages = document.querySelector("#pages").value;
    read = document.querySelector("#read").checked;
    if(author == '' || title == '' || pages == ''){
        return alert("Missing Information");
    }
    if(read){
        read = "Read"
    }
    else{
        read = "Not read"
    }
    addBookToLibrary();
    console.log(myLibrary)
    form1.reset();

    //Tests
    let box = document.createElement("DIV");
    box.innerHTML = Object.values(myLibrary[0]);
    form1.appendChild(box);
});

