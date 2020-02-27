const getForm = document.querySelector("#getForm");
const form1 = document.getElementById("form_id");
const submitBtn = document.querySelector("#addBook");
const cancelBtn = document.querySelector("#cancel");
const bodyElm = document.querySelector(".container");
const bookShelf = document.querySelector(".bookShelf");


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
let render = function (template, node) {
    const bookDiv = document.createElement("DIV");
    const authorDiv = document.createElement("DIV");
    const titleDiv = document.createElement("DIV");
    const slideDiv = document.createElement("DIV");
    const readDiv = document.createElement("DIV");
    const pagesDiv = document.createElement("DIV");
    bookDiv.classList.add("mainBook");
    authorDiv.classList.add("authorBook");
    titleDiv.classList.add("titleBook");
    slideDiv.classList.add("slideBook");
    readDiv.classList.add("readBook");
    pagesDiv.classList.add("pagesBook");
    authorDiv.innerHTML = template[0];
    titleDiv.innerHTML = template[1];
    pagesDiv.innerHTML = template[2];
    readDiv.innerHTML = template[3];
    slideDiv.appendChild(pagesDiv);
    slideDiv.appendChild(readDiv);
    bookDiv.appendChild(authorDiv);
    bookDiv.appendChild(titleDiv);
    bookDiv.appendChild(slideDiv);
    node.appendChild(bookDiv);

    
};

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
    addBookToLibrary();
    form1.reset();

    //Tests
    console.log(Object.values(myLibrary[key]))  
    render(Object.values(myLibrary[key]), bookShelf);

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