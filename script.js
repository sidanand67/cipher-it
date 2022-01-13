// Variable declarations 
let shift_key = document.getElementById("shift-key"); 
let message = document.getElementById("message").value; 


// Function definitions 
function fillShiftKey() {
    let html = ""; 
    for (let i = 0; i <= 25; i++){
        html += `<option value=${i}>${i}</option>`; 
    }
    
    shift_key.innerHTML = html; 
}




// Function Calls
fillShiftKey(); 