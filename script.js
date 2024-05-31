const form = document.getElementById("item-form")
const iteminput = document.getElementById("item-input")
const itemlist = document.getElementById("item-list")
const filter = document.getElementById("filter")
const clearall = document.getElementById("clear")
let classes = "remove-item btn-link text-red"
let iconclass = "fa-solid fa-xmark"

checkitem()
function additem(event) {

    event.preventDefault()
    let item_list = iteminput.value
    if(item_list === ''){
        alert("Please Add Item")
        return;
    }
    const li = document.createElement("li")
    li.appendChild(document.createTextNode(item_list))
    const btn = createBTN(classes) //remove-item btn-link text-red
    li.appendChild(btn)
    itemlist.appendChild(li)
    checkitem()
    iteminput.value = null
}

function RemoveAllItems() {

    while(itemlist.firstChild){
        itemlist.removeChild(itemlist.firstChild)
    }
    checkitem()
}

function createBTN(classes) {
    const BTN = document.createElement("button") 
    BTN.classList = classes
    const icon = createIcon(iconclass) //fa-solid fa-xmark
    BTN.appendChild(icon)
    return BTN
}

function createIcon(iconclass) {
    const icon = document.createElement("i")
    icon.classList = iconclass 
    return icon;
}

function checkitem(){
    let items = document.querySelectorAll('li')
    if (items.length !=0) {
        filter.style.display = 'block'
        clearall.style.display = 'block'
    }
    else{
        filter.style.display = 'none'
        clearall.style.display = 'none'
    }
}

function removeitem(event) {
    if(event.target.parentElement.classList.contains("remove-item")){
        event.target.parentElement.parentElement.remove()
    }
    checkitem()   
}

function filteritem(event) {
    let items = document.querySelectorAll('li')
    let text = event.target.value.toLowerCase()
    items.forEach((item) => {
        let ItemNameLower = item.textContent.toLowerCase().trim();
        if (ItemNameLower.indexOf(text) != -1) {
           item.style.display = 'flex';
        } 
        else{
            item.style.display = 'none';
        }
    });
}

form.addEventListener('submit',additem)
clearall.addEventListener('click', RemoveAllItems)
itemlist.addEventListener('click', removeitem)
filter.addEventListener('input',filteritem)