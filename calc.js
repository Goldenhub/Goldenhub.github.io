let btns = document.querySelectorAll("button");
let scrn = document.querySelector(".screen");
let scrn2 = document.querySelector(".screen2");


btns.forEach(btn => {
    
    btn.addEventListener("click", ()=>{
        if(btn.textContent.trim() == "C"){
            scrn.textContent = "0";
            scrn2.textContent = "";
        }
        else if(btn.textContent.trim() == "+/-"){
            let val = eval((scrn.textContent.trim()));
            scrn.textContent = eval(-(val));
        }
        else if(btn.textContent.trim() == "%"){
            scrn.textContent = scrn.textContent/100;
        }
        else if(btn.textContent.trim() == "x"){
            scrn.textContent += "*";
        }
        else if(btn.textContent.trim() == "="){
            let result = eval((scrn.textContent.trim()));
            if(Number.isInteger(result)){
                scrn2.textContent = result;
            }
            else{
                scrn2.textContent = result.toFixed(4);
            }
        }
        else if(btn.textContent.trim() == "←"){
            if(scrn.textContent.length == 1){
                scrn.textContent = "0";
            }else{
                scrn.textContent = scrn.textContent.substr(0, scrn.textContent.length-1);
            }
            
        }
        // else if(scrn.textContent == 0){
            
        // }
        else if(btn.textContent.trim() == "."){
            scrn.textContent += btn.textContent.trim();
        }
        else if(scrn.textContent != 0){
            scrn.textContent += btn.textContent.trim();
        }
        
        else{
            scrn.textContent = btn.textContent.trim();
        }

        // let back = document.querySelector(".bsp");
        // console.log(back);
});
});
