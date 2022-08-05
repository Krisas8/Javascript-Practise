const itemField = document.getElementById("inputItem");
const quantityField = document.getElementById("inputQuantity");
const ul = document.querySelector(".uList");

const addBtn = document.getElementById("addButtonId");
addBtn.addEventListener("click", addItem);
itemField.addEventListener("keypress",  function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        addBtn.click();
    }
});
quantityField.addEventListener("keypress",  function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        addBtn.click();
    }
});

function addItem() {
if (itemField.value !== "") {
    console.log(quantityField.value + " " + itemField.value);
    let listItemName = itemField.value;
    let listItemQuantity = quantityField.value;
    //create the listItem (li)
    let newListItem = document.createElement("li");
    newListItem.setAttribute("id",`li${ul.children.length+1}`);

    //create the different spans
    let spanItemName = document.createElement("span");
    spanItemName.setAttribute("class", "itemName");
    spanItemName.setAttribute("id", `itemName${ul.children.length+1}`);
    spanItemName.append(listItemName);
    let spanItemQTY = document.createElement("span");
    spanItemQTY.setAttribute("class","itemQTY");
    spanItemQTY.setAttribute("id",`itemQTY${ul.children.length+1}`);
    spanItemQTY.setAttribute("value", (listItemQuantity) ? listItemQuantity : listItemQuantity + 1);
    spanItemQTY.append((listItemQuantity) ? listItemQuantity : listItemQuantity + 1); 
    let wrapperPlusMinus = document.createElement("span");
    wrapperPlusMinus.setAttribute("id", "wrapPlusMinus");
    let btnPlus = document.createElement("button");
    btnPlus.setAttribute("class", "plus");
    btnPlus.setAttribute("onclick", `onClickPlus(event)`)
    btnPlus.setAttribute("id", ul.children.length+1)
    btnPlus.innerHTML="&#43;";

    let btnMinus = document.createElement("button");
    btnMinus.setAttribute("class", "minus")
    btnMinus.innerHTML="&#8722;";
    btnMinus.setAttribute("id", ul.children.length+1)
    btnMinus.setAttribute("onclick", `onClickMinus(event)`)
    wrapperPlusMinus.append(btnPlus, btnMinus);

    let btnDelete = document.createElement("button");
    btnDelete.setAttribute("class", "delete")
    btnDelete.setAttribute("id", ul.children.length+1);
    btnDelete.setAttribute("onclick", `deleteItem(event)`)
    btnDelete.innerHTML = "&#128465"
       
    let btnDeleteLabel = document.createElement("label");
    btnDeleteLabel.append(btnDelete);

    let checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("class", "checkBox");
    checkBox.setAttribute("id", `${ul.children.length+1}`);
    checkBox.addEventListener("change", e => {
        if(e.target.checked) {
           let id = e.target.id;
           document.getElementById(`itemName${id}`).style.textDecoration = "line-through white 3px";
        } else {
            let id = e.target.id;
            document.getElementById(`itemName${id}`).style.textDecoration = "none"; 
        }
        }
    )

    //append the spans with attributes to the li-element
    newListItem.append(spanItemName, spanItemQTY, wrapperPlusMinus,btnDeleteLabel,checkBox);
    ul.append(newListItem);
    itemField.value = "";
    quantityField.value = "";   

} else {
    alert("Please add an item");
}
}

//add QTY with plus button
function onClickPlus(e) {
    let id = e.target.id
    let qty = document.getElementById(`itemQTY${id}`);
    qty.innerHTML++;
 
}
//reduce QTY with minus button
function onClickMinus(e) {
    let id = e.target.id;
    let qty = document.getElementById(`itemQTY${id}`)
    if (qty.innerHTML > 1) {
        qty.innerHTML--;
    } else {
        qty.innerHTML = 1;
    }
}

//delete li entry 
function deleteItem(e)
 {
   let id = e.target.id;
   let listItem = document.getElementById(`li${id}`);
   listItem.remove();
 }






