
 let Allbuttons = document.querySelectorAll(".btn");
 let input = document.querySelector("#input-text");

 function doCalculation() {
    try{
        let expression = input.value;
        let finalExpression = expression.replace(/%/g, '/100');
        input.value = eval(finalExpression);
    } catch(err) {
        input.value = "Error"

    }
 }
Allbuttons.forEach(button => {
    button.addEventListener("click", (e)=>{
        let btnTxt = e.target.innerText;

        if(btnTxt === "=") {
            doCalculation();
        } else if(btnTxt === "AC") {
            input.value = "";
        } else if(btnTxt === "DEL") {
            // input.value = input.value.substring(0, input.value.length-1);
            input.value = input.value.slice(0,-1);
        }
        else {
            input.value += btnTxt;
        }
    });
});

input.addEventListener("keydown", (e) =>{
    if(e.key === "Enter") {
        e.preventDefault();
        doCalculation();
    } 
    if(e.key === "Escape") {
        input.value = "";
    }
})