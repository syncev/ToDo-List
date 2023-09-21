window.addEventListener("DOMContentLoaded", () => {
    var btn = document.getElementById("inputBtn");
    const ul = document.getElementById("ul")
    

    function liCreator(){
        var newTask = document.getElementById("inputBar")
        //creating li
        const li = document.createElement("li");
        li.className = "row mb-3 py-3";
        //adding li to ul
        ul.appendChild(li)
        //creating span (the text)
        const span = document.createElement("span");
        span.className = "col";
        span.textContent = newTask.value;
        //adding span to li
        li.appendChild(span)
        //create div1
        const div1 = document.createElement("div");
        div1.className ="col-1 gx-0";
        //adding div1 to li
        li.appendChild(div1)
        //create img tick
        const imgTick = document.createElement("img");
        imgTick.className ="check-img img-btn";
        imgTick.setAttribute("src","Assets/circle-check-solid.svg");
        //adding img to div1
        div1.appendChild(imgTick);
        //create div2
        const div2 = document.createElement("div");
        div2.className = "col-1 gx-0";
        //adding div2 to li
        li.appendChild(div2);
        //create img minus
        const imgMinus = document.createElement("img");
        imgMinus.className = "minus-img img-btn";
        imgMinus.setAttribute("src", "Assets/circle-minus-solid.svg");
        //adding img2 to div2
        div2.appendChild(imgMinus);

    }

btn.addEventListener("click", liCreator)
})