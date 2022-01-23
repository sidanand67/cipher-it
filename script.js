// Variable declarations 
let shift_key = document.getElementById("shift-key"); 
let message_inp = document.getElementById("message"); 
let submit_btn = document.getElementById("submit-btn"); 
let result_box = document.getElementById("result-box"); 
let checked_mode;
let key; 
let message; 
let result; 

// Function definitions 
function fillShiftKey() {
    let html = ""; 
    for (let i = 0; i <= 25; i++){
        html += `<option value=${i}>${i}</option>`; 
    }
    
    shift_key.innerHTML = html; 
}

function encryption(message, key) {
    let dummyResult = [], temp; 
    for(let i = 0; i < message.length; i++){
        temp = message.charCodeAt(i); 
        if (temp == 32) {
            dummyResult.push(message[i]); 
        } 
        else {
            if (temp + key > 126) {
                temp = ((temp+key) % 126 + 33) - 1; 
            }
            else {
                temp = temp + key; 
            }
            dummyResult.push(String.fromCharCode(temp)); 
        }
    }
    return dummyResult.join(''); 
}

function decryption(message, key) {
    let dummyResult = [], temp; 
    for(let i = 0; i < message.length; i++){
        temp = message.charCodeAt(i); 
        if (temp == 32){
            dummyResult.push(message[i]); 
        }
        else{
            if (temp - key < 33) {
                temp = (temp-key)%33+126-1; 
            }
            else {
                temp = temp - key; 
            }
            dummyResult.push(String.fromCharCode(temp)); 
        }
    }
    return dummyResult.join(''); 
}

function printResult(){
    if (message_inp.value !== ""){
        message = message_inp.value;
        checked_mode = document.querySelector('input[name="mode"]:checked').value
        key = parseInt(document.querySelector("#shift-key").value); 
    
        if (checked_mode == 0){
            result = encryption(message, key); 
        }
        else {
            result = decryption(message, key); 
        }
    
        result_box.disabled = false;
        result_box.innerHTML = result;




        // console.log(message); 
        console.log(key); 
        // console.log(checked_mode); 
    } 
}





// Function Calls
fillShiftKey(); 
submit_btn.addEventListener("click", printResult); 