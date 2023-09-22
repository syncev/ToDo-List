window.addEventListener("DOMContentLoaded", () => {
  function liCreator() {
    //make sure the input is not empty
    if (newTask.value != "") {
      //creating li
      const li = document.createElement("li");
      li.className = "row mb-3 py-3 LI";
      //adding li to ul
      todoList.appendChild(li);
      //creating span (the text)
      const span = document.createElement("span");
      span.className = "col";
      span.textContent = newTask.value;
      //adding span to li
      li.appendChild(span);
      //create div1
      const div1 = document.createElement("div");
      div1.className = "col-1 gx-0";
      //adding div1 to li
      li.appendChild(div1);
      //create img tick
      const imgTick = document.createElement("img");
      imgTick.setAttribute("type", "button");
      imgTick.setAttribute("id", "btnComplete");
      imgTick.className = "check-img img-btn";
      imgTick.setAttribute("src", "Assets/circle-check-solid.svg");
      //adding img to div1
      div1.appendChild(imgTick);
      //create div2
      const div2 = document.createElement("div");
      div2.className = "col-1 gx-0";
      //adding div2 to li
      li.appendChild(div2);
      //create img minus
      const imgMinus = document.createElement("img");
      imgMinus.setAttribute("type", "button");
      imgMinus.setAttribute("id", "btnRemove");
      imgMinus.className = "minus-img img-btn";
      imgMinus.setAttribute("src", "Assets/circle-minus-solid.svg");

      //adding img2 to div2
      div2.appendChild(imgMinus);
      //reset the inpurBar field
      newTask.value = "";
    }
  }
  //shortcuts
  const btn = document.getElementById("inputBtn");
  const newTask = document.getElementById("inputBar");
  const todoList = document.getElementById("todoTaskList");
  const doneList = document.getElementById("doneList");
  const listContainer = document.getElementById("listContainer")

  //add the input by pressing enter
  newTask.addEventListener("keyup", function (event) {
    //make sure the pressed key is enter
    if (event.key === "Enter") {
      liCreator();
    }
  });

  //add the input by clicking the send button
  btn.addEventListener("click", liCreator);

  //remove the input from the list
  //add the event listener to the section that contains both UL so that its always listening to both lists
  todoList.addEventListener("click", (event) => {
    const parentListItem = event.target.closest("li");
    //match the origin of the event with the btn remove adn remove item
    if ( event.target.matches("#btnRemove")) {
      parentListItem.remove();
    }
    //change from todo list to done list
    if ( event.target.matches("#btnComplete")) {
      doneList.append(parentListItem);
      event.target.setAttribute("src", "Assets/rotate-left-solid.svg")
      event.target.setAttribute("class", "restore-img img-btn")
      
    }
    //change from done list to todo list
});
doneList.addEventListener("click", (event) => {
    const parentListItem = event.target.closest("li");
    if ( event.target.matches("#btnRemove")) {
        parentListItem.remove();
      }
    if(event.target.matches("#btnComplete")){
        todoList.append(parentListItem)
        event.target.setAttribute("src", "Assets/circle-check-solid.svg");
        event.target.setAttribute("class","check-img img-btn")
    }
})
});
