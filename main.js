const getForm = document.querySelector("#getForm");
const form1 = document.getElementById("form_id");
const submitBtn = document.querySelector("#addBook");
const cancelBtn = document.querySelector("#cancel");
const bodyElm = document.querySelector(".container");


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

form1.reset(); // resets form entries on Reload

let key = 0;
submitBtn.addEventListener("click", () => {
    
    
    author = document.querySelector("#author").value;
    title = document.querySelector("#title").value;
    pages = document.querySelector("#pages").value;
    read = document.querySelector("#read").checked; // returns true or false
    if (author == '' || title == '' || pages == '') {
        return alert("Missing Information");
    }
    read ? read = "Read" : read = "Not read";
    // if (read) {
    //     read = "Read"
    // } else { // 0
    //     read = "Not read"
    // }
    addBookToLibrary();
    console.log(myLibrary)
    form1.reset();

    //Tests
    let box = document.createElement("DIV");
    box.innerHTML = Object.values(myLibrary[key]);
    form1.appendChild(box);
    key++;
});

getForm.addEventListener("click", () => { 
    form1.classList.toggle("showForm");
    bodyElm.classList.toggle("opaque"); 
    form1.reset();
});
cancelBtn.addEventListener("click", () => {
    form1.classList.toggle("showForm");
    bodyElm.classList.toggle("opaque");
    form1.reset();
});
bodyElm.addEventListener("click", () => {
    form1.classList.toggle("showForm");
    bodyElm.classList.toggle("opaque");
    form1.reset();
});