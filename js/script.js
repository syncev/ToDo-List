
window.addEventListener("DOMContentLoaded", () => {
  //array
  let taskArray ;
  let myArrString = localStorage.getItem("myTodoArray");
   taskArray = JSON.parse(myArrString);
  
   
   //function for saving my tasks
   function saveMyTasks(myArr){
    const myArrString = JSON.stringify(myArr);
    localStorage.setItem('myTodoArray', myArrString);
  }
  //shortcuts
  const btn = document.getElementById("inputBtn");
  const newTask = document.getElementById("inputBar");
  const todoList = document.getElementById("todoTaskList");
  const doneList = document.getElementById("doneList");
  
  //remove task and save items
  function removeTask(parentListItem){
    //the nearest content of the pressed button
    const itemContent = parentListItem.querySelector("span")
    if ( event.target.matches("#btnRemove")) {
      //copy the array from itself but filtering the text i want to remove
      taskArray[0] = taskArray[0].filter(item => item !== itemContent.textContent)  ;
      taskArray[1] = taskArray[1].filter(item => item !== itemContent.textContent)  ;
      parentListItem.remove();
      //update local
      saveMyTasks(taskArray);
    }
  }
  
  function liCreator(task,value) {
    //creating li
    const li = document.createElement("li");
    li.className = "row mb-3 py-3 LI";
    //adding li to ul
    if(value === "todo"){
      todoList.appendChild(li)
    }else{
      doneList.appendChild(li)
    }
    
    //creating span (the text)
    const span = document.createElement("span");
    span.className = "col";
    span.textContent = task;
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
      //create img minus
      const imgMinus = document.createElement("img");
      imgMinus.setAttribute("type", "button");
      imgMinus.setAttribute("id", "btnRemove");
      imgMinus.className = "minus-img img-btn";
      imgMinus.setAttribute("src", "Assets/circle-minus-solid.svg");
      //adding img2 to div1
      div1.appendChild(imgMinus);
      //reset the inpurBar field
      newTask.value = "";
      
    }
    
    
    btn.addEventListener("click", () =>{
      if(newTask.value !== ""){
        //add new value to array
        taskArray[0].push(newTask.value);
        //passes the new value to the item maker
        liCreator(newTask.value, "todo")
        //save array in local
        saveMyTasks(taskArray)
      }
    })
    //make the enter work for input send too
    newTask.addEventListener("keyup", (event) =>{
      if(event.key === "Enter" && newTask.value != ""){
        //add new value to array
        taskArray[0].push(newTask.value);
        //passes the new value to the item maker
        liCreator(newTask.value, "todo")
        //save array in local
        saveMyTasks(taskArray)
      }
    })
    
    //remove the input from the list
    //add the event listener to the section that contains both UL so that its always listening to both lists
    todoList.addEventListener("click", (event) => {
      const parentListItem = event.target.closest("li");
      const itemContent = parentListItem.querySelector("span")
      //match the origin of the event with the btn remove adn remove item
      removeTask(parentListItem)
      
      //change from todo list to done list
      if ( event.target.matches("#btnComplete")) {
        //copy the array from itself but filtering the text i want to remove
        taskArray[0] = taskArray[0].filter(item => item !== itemContent.textContent);
        taskArray[1].push(itemContent.textContent);
        //remove the item from the html to do list and add it to done list while changing the pic
        doneList.append(parentListItem);
        event.target.setAttribute("src", "Assets/rotate-left-solid.svg")
        event.target.setAttribute("class", "restore-img img-btn")
        console.log(taskArray)
        saveMyTasks(taskArray);
      }
    });
    //change from done list to todo list
    doneList.addEventListener("click", (event) => {
      const parentListItem = event.target.closest("li");
      const itemContent = parentListItem.querySelector("span")
      //the nearest content of the pressed button
      removeTask(parentListItem)
      //change from done to toDo list
      if(event.target.matches("#btnComplete")){
        //remove from done array 
        taskArray[1] = taskArray[1].filter(item => item !== itemContent.textContent)
        //add to toDo array
        taskArray[0].push(itemContent.textContent)
        todoList.append(parentListItem)
        event.target.setAttribute("src", "Assets/circle-check-solid.svg");
        event.target.setAttribute("class","check-img img-btn")
        saveMyTasks(taskArray);
      }
    })
    
    if(taskArray === null){
      console.log("not found")
       taskArray = [[],[]]
    } else if (taskArray !== null){
      console.log(taskArray)
      for(const task of taskArray[0]){
        liCreator(task, "todo")
      }
      for(const task of taskArray[1]){
        liCreator(task)
      }
    }
    
    
  }); 
