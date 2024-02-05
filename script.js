//setting toggle function
let h1 = document.querySelector("h1");
let body = document.querySelector("body");
let currMode = "Light";
let toggle = () =>{
    if(currMode === "Dark"){
        currMode = "Light";
        h1.innerText = "This is the LIGHT mode";
        body.classList.add("Light");
        body.classList.remove("Dark");
    }
    else{
        currMode = "Dark";
        h1.innerText = "This is the DARK mode";
        body.classList.add("Dark");
        body.classList.remove("Light");
        //need to remove light mode as well otherwise may function only once
    }
    h1.style.fontStyle = "italic";
    console.log(currMode);
};

//stting up node for the function execution
let btn = document.querySelector("button");
btn.addEventListener("click", toggle);


//toggling via hovering over div
let div1 = document.querySelector(".box1");  //changed from div to box
let div2 = document.querySelector(".box2");
//setting up separate toggling functions
let ToggleLight = () =>{
    if(currMode === "Dark"){
    h1.innerText = "This is the LIGHT mode";
    currMode = "Light";
    body.classList.add("Light");
    body.classList.remove("Dark");
    h1.style.fontStyle = "italic";
    }
    console.log(currMode);
};
let ToggleDark = () =>{
    if(currMode === "Light"){
    currMode = "Dark";
    h1.innerText = "This is the DARK mode";
    body.classList.add("Dark");
    body.classList.remove("Light");
    h1.style.fontStyle = "italic";
    }
    console.log(currMode);
}
//attaching function and event together
div1.addEventListener("mouseover", ToggleLight);  //switches to light mode
div2.addEventListener("mouseover", ToggleDark);   //switches to dark mode