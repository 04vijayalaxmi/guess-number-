const input =document.querySelector("input");
 guess =document.querySelector(".guess");
 checkButton =document.querySelector("button");
 remainChances =document.querySelector(".Chances");

 input.focus();
 
 let randomNum = Math.floor(Math.random() * 100);
 chance=10;

 checkButton.addEventListener("click", () => {
     chance--;
    let inputValue=input.value;

    if(inputValue == randomNum) {
        [guess.textContent, input.disabled]=["congratulations", true];
        [checkButton.textContent, guess.style.color]=["Replay", "#333"];
    } 
    else if (inputValue > randomNum && inputValue < 100){
        [guess.textContent, remainChances.textContent]=["you guess is high", chance];
        guess.style.color="#333";
    } 
    else if(inputValue<randomNum && inputValue>0){
        [guess.textContent, remainChances.textContent]=["you guess is low", chance];
        guess.style.color="#333";
    }
    else{
        [guess.textContent, remainChances.textContent]=["your number is Invalid", chance];
        guess.style.color="#DE0611";
    }
    if(chance ==0){
        [guess.textContent, checkButton.disabled,inputValue]=["Replay",true, ""];
        [guess.textContent,guess.style.color]=["you lost the game", "#DE0611"];
        
    }
    if(chance<0){
        window.location.reload();
    }
        
       
 });
