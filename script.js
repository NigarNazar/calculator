const display = document.querySelector ("#display");
const buttons = document.querySelectorAll ("button");

buttons.forEach((item)  => {
    item.onclick = () => {
        if(item.id == "clear") {
            display.innerText = "";
        } else if ( item.id == "backspace") {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        } else if(display.innerText  != "" && item.id == "equal") {
            display.innerText = eval(display.innerText);
        } else if(display.innerText == "" && item.id == "equal") {
            display.innerText = "";
            setTimeout(() => (display.innerText = ""), 2000);
        } else{
            display.innerText += item.id;
        }
       
    };
    // item.addEventListener("click" , ()=>{
    //     if(item.id == "equal"){
    //         display.innerHTML = eval(display.innerHTML);
    //     } else if(item.id == "clear"){
    //         display.innerHTML = ""
    //     } else if (item.id == "backspace"){
    //         display.innerHTML = display.innerHTML.slice(0,-1);
    //     } else{
    //         display.innerHTML += item.id
    //     }
    // })
});