let form = document.querySelector("form");
let input = document.querySelector("input");
let select = document.querySelector("select");
let ul = document.querySelector("ul");

const saveFeedback = (e) => {
    e.preventDefault();

    let li = document.createElement("li");
    let h1 = document.createElement("h1");
    let h2 = document.createElement("h2");

    h1.innerText = "Rating" + " :-" + select.value;
    h2.innerText = "FeedBack" + ":-" + input.value;
    li.className = "list-group-item"
    li.appendChild(h1);
    li.appendChild(h2);
    let delBtn = document.createElement("Button");
    delBtn.innerText = "delete";
    delBtn.className = "btn btn-danger float-end"
    li.appendChild(delBtn)

    ul.appendChild(li);

    form.reset();
}

form.addEventListener("submit", saveFeedback);


const deleteTodo = (e) => {
    if (e.target.className.includes("btn-danger")){
    ul.removeChild(e.target.parentElement);}
};
  
  ul.addEventListener("click", deleteTodo);

// console.log(li)