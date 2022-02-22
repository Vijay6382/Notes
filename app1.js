console.log("this is my First js project");

showNotes();
let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function () {
    let addTit=document.getElementById("addTitle");
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let myObj={
        text :addTxt.value,
        title :addTit.value,
    }
     
    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    showNotes();
})

function showNotes() {
    let notes = localStorage.getItem("notes");

    if (notes == null) {

        notesObj = [];
    }
    else {

        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (Element, index) {
        html += `
               <div class="notesCard card my-2 mx-2" style="width: 18rem;">
                  <div class="card-body">
                     <h5 class="card-title">${Element.title}</h5>
                      <p id="cardTxt" class="card-text">${Element.text}</p>
                      <button id="${index}"  onclick="deleteNotes(this.id)" class="btn btn-primary">Delete</button>
                   </div>
               </div>
                 `
    });
    let notesElm = document.getElementById("notes");

    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Add Something To Notes`
    }
}

//delete notes function
function deleteNotes(index) {
    let notes = localStorage.getItem("notes");

    if (notes == null) {

        notesObj = [];
    }
    else {

        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

let search = document.getElementById("searchBtn");
search.addEventListener("input", function () {

    let inputval = search.value;
    let notesCard = document.getElementsByClassName("notesCard");

    Array.from(notesCard).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerHTML;

        if (cardTxt.includes(inputval)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })

})