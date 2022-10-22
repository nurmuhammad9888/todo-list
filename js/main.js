const elForm = document.querySelector(".form-js");
const elInput = document.querySelector(".input-js");
const elBtn = document.querySelector(".btn-js");
const elList = document.querySelector(".list");

let arry = [];

let textFunc = function(arr, listt){
    listt.innerHTML = "";
    
    for (const arrays of arr) {
        let item = document.createElement("li");
        item.classList.add("d-flex", "align-items-center","mx-auto", "mt-3", "bg-secondary", "justify-content-between","py-2", "rounded")
        
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox"
        checkbox.classList.add("check")
        item.appendChild(checkbox);
        
        let text = document.createElement("p");
        text.textContent = arrays.textName;
        text.classList.add("text-white", "fs-5" ,"text-center", "mb-0")
        item.appendChild(text);
        
        let btnDelete = document.createElement("button");
        btnDelete.textContent = "Delete";
        btnDelete.type = "button";
        btnDelete.classList.add("btn-delete");
        btnDelete.classList.add("btn","btn-danger" ,"text-white")
        btnDelete.dataset.id = arrays.id;

        let btnIdet = document.createElement("button");
        btnIdet.textContent = "Idet";
        btnIdet.type = "button";
        btnIdet.classList.add("btn","btn-info" ,"text-white","mx-2")

        let div = document.createElement("div");
        div.appendChild(btnDelete);
        div.appendChild(btnIdet);
        item.appendChild(div)
        elList.appendChild(item)
    }
}

elForm.addEventListener("submit", function(evt){
    evt.preventDefault();
    
    arry.push({
        textName:elInput.value,
        id:arry[arry.length -1]?.id + 1 || 1,
    })
    
    elForm.reset();
    textFunc(arry, elList);
})
elList.addEventListener("click", (evt) =>{
    if (evt.target.matches(".btn-delete")) {
        let btnDeleteId = Number(evt.target.dataset.id);
        let foundIndex = arry.findIndex((todo) => todo.id === btnDeleteId);
        arry.splice(foundIndex, 1);
        textFunc(arry, elList)
    }
})