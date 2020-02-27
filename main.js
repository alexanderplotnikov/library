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
function updateShelf(){
    let temp = document.querySelectorAll(".mainBook");
    for(let j = 0; j < temp.length; j++){
        temp[j].parentNode.removeChild(temp[j]);
    }
}
function deleteBook(bookIndex){
    let i = 0;
    while(bookIndex != i) {console.log("i in deleteBook" + i); i++};
    return myLibrary.splice(i, 1);    
}
let render = function (myLibrary, node) {
    updateShelf();
    for (let i = 0; i < myLibrary.length; i++){
        const bookDiv = document.createElement("DIV");
        const authorDiv = document.createElement("DIV");
        const titleDiv = document.createElement("DIV");
        const slideDiv = document.createElement("DIV");
        const readDiv = document.createElement("DIV");
        const pagesDiv = document.createElement("DIV");
        const deleteBtn = document.createElement("BUTTON");
        deleteBtn.innerHTML = "X";
        deleteBtn.addEventListener("click", () =>{
            let temp = i;
            deleteBook(temp);
            render(myLibrary, bookShelf);
        });
        bookDiv.classList.add("mainBook");
        authorDiv.classList.add("authorBook");
        titleDiv.classList.add("titleBook");
        slideDiv.classList.add("slideBook");
        readDiv.classList.add("readBook");
        pagesDiv.classList.add("pagesBook");

        let template = Object.values(myLibrary[i]);
        authorDiv.innerHTML = template[0];
        titleDiv.innerHTML = template[1];
        pagesDiv.innerHTML = template[2];
        readDiv.innerHTML = template[3];

        slideDiv.appendChild(pagesDiv);
        slideDiv.appendChild(readDiv);
        slideDiv.appendChild(deleteBtn);
        bookDiv.appendChild(authorDiv);
        bookDiv.appendChild(titleDiv);
        bookDiv.appendChild(slideDiv);
        node.appendChild(bookDiv);
    }  
};

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
    changeState();
    render(myLibrary, bookShelf);
});

getForm.addEventListener("click", () => { 
    changeState();
});
cancelBtn.addEventListener("click", () => {
    changeState();
});
bodyElm.addEventListener("click", () => {
    changeState();
});

function changeState(){
    form1.classList.toggle("showForm");
    bodyElm.classList.toggle("opaque");
    form1.reset();
}