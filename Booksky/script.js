var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

var cancelpopup=document.getElementById("cance-popup")
cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

var container=document.querySelector(".container")
var addbook=document.getElementById("add book")
var booktitleinput=document.getElementById("book-title")
var bookarthurinput=document.getElementById("book-author")
var bookdescriptioninput=document.getElementById("book-description")
var del=document.getElementById("kick")

addbook.addEventListener("click",function(){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=` <h2>${booktitleinput.value}</h2>
        <h5>${bookarthurinput.value}</h5>
        <p>${bookdescriptioninput.value}</p>
          <button id="kick" onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})
function deletebook(event){
    event.target.parentElement.remove()
    cursor.pointer
}