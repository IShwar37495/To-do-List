const buttonElement=document.getElementById("button");
const inputElement=document.getElementById("task");
const itemContainer=document.getElementById("item-container");

function handleData(event){
    event.preventDefault();
    if(inputElement.value===""){
        alert("please enter some task");
        return ;
    }
    else{

    

    const listItem= document.createElement("li");
    listItem.textContent=inputElement.value;
   
   itemContainer.appendChild(listItem);
let spanElement=document.createElement("span");
spanElement.innerHTML="&#x2612";
listItem.appendChild(spanElement);
    }
   inputElement.value="";
}



buttonElement.addEventListener("click",handleData);

itemContainer.addEventListener("click", function(event){
    if(event.target.tagName==="LI"){
        event.target.classList.toggle("checked");
        saveData();
    }
    else if(event.target.tagName==="SPAN"){
        event.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData(){
    localStorage.setItem("data",itemContainer.innerHtml)
}

function showTask(){
    itemContainer.innerHtml=localStorage.getItem("data");
};

showTask();