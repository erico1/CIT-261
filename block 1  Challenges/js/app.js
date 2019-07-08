// select the Elements
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

//class names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

// Variables
let LIST, id;

// get item from Local storage
let data = localStorage.getItem("TODO");

//  CHECK IF DATA IS EMPTY
/*if(data){
LIST = JSON.parse(data);
id = LIST.length;
loadList(LIST);
}else{
    // Not Empty
LIST = [];
id = 0;
}*/
/*I commented this out because I could not get it to store to local storage*/

// load list
function loadList(array){
    array.forEach(function(item){
        addToDo(item.name, item.id, item.done, item.trash);
    });
}

// This will show date
const options = { weekday: "long", month: "short", day: "numeric" };
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-Us", options);

// add to do function
function addToDo(toDo, id, done, trash){
    if(trash){return;}
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";

    const item = `<li class="item">
      <i class="fa ${DONE} co" job="complete" id="${id}"></i>
      <p class="text ${LINE}">${toDo}</p>
      <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
    </li>
    `;
    const position = "beforeend";
    list.insertAdjacentHTML(position, item);

}
// Event listener ""ENTER"
document.addEventListener("keyup", function(even){
    if(event.keyCode == 13) {
        const toDo = input.value;
        // if the input isn't empty
        if (toDo) {
            addToDo(toDo);
            LIST.push({
                name : toDo,
                id : id,
                done : false,
                trash : false
            });
// add item to local stoprage
        localStorage.setItem("TODO", JSON.stringify(LIST));
            id++;
        }
        input.value = "";
    }

}); 
// complete to-do
function completeToDo(element){
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

    LIST[element.id].done = LIST[element.id].done ? false : true;
}

// This will remove to-do list
function removeToDo(element){
    element.parentNode.parentNode.removeChild(element.parentNode);

    LIST[element.id].trash = true;
}

// target the items created dynamically

list.addEventListener("click", function(event){
     const element =event.target;
     const elementJob = element.attributes.job.value;

     if(elementJob == "complete"){
         completeToDo(element);
        }else if(elementJob == "delete"){
             removeToDo(element);
         }
         // add item to local stoprage
localStorage.setItem("TODO", JSON.stringify(LIST));
});
