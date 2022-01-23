// Variable declarations 
let shift_key = document.getElementById("shift-key"); 
let message_inp = document.getElementById("message"); 
let submit_btn = document.getElementById("submit-btn"); 
let result_box = document.getElementById("result-box"); 
let copyBtn = document.getElementById("copy-btn"); 
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
        if (temp >= 33 && temp <= 126) {
            if (temp + key > 126) {
                temp = ((temp+key) % 126 + 33) - 1; 
            }
            else {
                temp = temp + key; 
            }
            dummyResult.push(String.fromCharCode(temp)); 
        } 
        else {
            dummyResult.push(message[i]); 
        }
    }
    return dummyResult.join(''); 
}

function decryption(message, key) {
    let dummyResult = [], temp; 
    for(let i = 0; i < message.length; i++){
        temp = message.charCodeAt(i); 
        if (temp >= 33 && temp <= 126){
            if (temp - key < 33) {
                temp = (temp-key)+94; 
            }
            else {
                temp = temp - key; 
            }
            dummyResult.push(String.fromCharCode(temp)); 
        }
        else{
            dummyResult.push(message[i]); 
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
        result_box.textContent = result;
        copyBtn.style.visibility = "visible"; 

    } 
}

function copyMsg(){
    result_box.select(); 
    document.execCommand("copy"); 
}


// Function Calls
fillShiftKey(); 
submit_btn.addEventListener("click", printResult); 