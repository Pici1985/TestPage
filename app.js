let h1 = document.getElementById("h1");

document.getElementById("button").addEventListener('click',(e)=> {
    e.preventDefault();
    console.log("Clicked!");
    if(h1.style.color === "white"){
        h1.style.color = "green";
        h1.style.textShadow = "3px 3px 3px white";
        return;
    };
    if(h1.style.color === "green"){
        h1.style.color = "white";
        h1.style.textShadow = "3px 3px 3px black";
        return;
    };
});