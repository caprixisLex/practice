let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
let listEl = document.querySelector("#list-el")

// Push the value "www.awesomelead.com" to myArray when the input button is clicked

inputBtn.addEventListener("click", function() {

    let value = inputEl.value
    myLeads.push(value)
    inputEl.value =""
    console.log(myLeads)
    displayItems()
})

function displayItems(){
    let listItems = ""
    for (i = 0; i<myLeads.length; i++){
       listItems += `<li><a href="${myLeads}">${myLeads[i]}</a></li>`
    }

listEl.innerHTML = listItems
}