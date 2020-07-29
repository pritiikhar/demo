let stateName = [];
//Adding States name to stateName array with index------------------------------------------------------------------------------------------------------------------------------------
stateName[100] = 'Andhra Pradesh', stateName[125] = 'Arunachal Pradesh', stateName[150] = 'Assam', stateName[175] = 'Bihar', stateName[200] = 'Chhattisgarh',
stateName[225] = 'Goa', stateName[250] = 'Gujarat', stateName[275] = 'Haryana', stateName[300] = 'Himachal Pradesh', stateName[325] = 'Jharkhand', stateName[350] = 'Karnataka', 
stateName[375] = 'Kerala', stateName[400] = 'Madhya Pradesh', stateName[425] = 'Maharashtra', stateName[450] = 'Manipur', stateName[475] = 'Meghalaya', stateName[500] = 'Mizoram', 
stateName[525] = 'Nagaland', stateName[550] = 'Odisha', stateName[575] = 'Punjab', stateName[600] = 'Rajasthan', stateName[625] = 'Sikkim', stateName[650] = 'Tamil Nadu', 
stateName[675] = 'Telangana', stateName[700] = 'Tripura', stateName[725] = 'Uttar Pradesh', stateName[750] = 'Uttarakhand', stateName[775] = 'West Bengal', 
stateName[800] = 'Andaman and Nicobar', stateName[825] = 'Chandigarh', stateName[850] = 'Daman and Diu & Dadar and Nagar Haveli', stateName[875] = 'Delhi', 
stateName[900] = 'Jammu and Kashmir', stateName[925] = 'Ladakh', stateName[950] = 'Lakshadweep', stateName[975] = 'Puducherry';
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const isNumericInput = (event) => {
    const key = event.keyCode;
    return ((key >= 48 && key <= 57) || // Allow number line
        (key >= 96 && key <= 105) // Allow number pad
    );
};

const isAlphabetInput = (event) => {
    const key = event.keyCode;
    return ((key >= 65 && key <= 90) || // Allow number line
        (key == 32) // Allow space
    );
};

const isAlphabetInputPhone = (event) => {
    const key = event.keyCode;
    return ((key >= 29 && key <= 54) || // Allow number line
        (key == 62) // Allow space
    );
};

const isModifierKey = (event) => {
    const key = event.keyCode;
    return (event.shiftKey === true || key === 35 || key === 36) || // Allow Shift, Home, End
        (key === 8 || key === 9 || key === 13 || key === 46) || // Allow Backspace, Tab, Enter, Delete
        (key > 36 && key < 41) // Allow left, up, right, down
       
};

const formatMob = (event) => {
    // Input must be of a valid number format or a modifier key, and not longer than ten digits
    if(!isNumericInput(event) && !isModifierKey(event)){
        event.preventDefault();
    }
};

const formatName = (event) => {
    // Input must be of a valid number format or a modifier key, and not longer than ten digits
    if(!isAlphabetInput(event) && !isModifierKey(event)){
        event.preventDefault();
    }
};

//Mobile number validation
const formatToPhone = (event) => {

if(isModifierKey(event)) {return;}
   
    const target = event.target;
    value = target.value;
    const input = target.value.replace(/\D/g,'').substring(0,10); // First ten digits of input only
    zip = input.substring(0,3);
    middle = input.substring(3,6);
    last = input.substring(6,10);
    
   

    if(input.length >= 6){target.value = `(${zip})-${middle}-${last}`;
    
}
    else if(input.length >= 3){target.value = `(${zip}) - ${middle}`;
    
}
    else if(input.length > 0){target.value = `(${zip}`;}

mobOptr();
displayStateName();
    
    if(value.length == 14){
 document.getElementById("erroR").innerHTML = "";
 document.getElementById("submit").disabled = false; 
}
else{
document.getElementById("erroR").innerHTML = "Enter a valid 10 digit  mobile number";
document.getElementById("submit").disabled = true; 
}
};

//Name Validation
const formatToName = (event) => {
    
    const name = document.getElementById("name");
    const nameEx = /^[a-zA-Z ]*$/;
    const target =  event.target;
    const value = target.value;
    word = value.split(" ");
    var char = " ";
    var i;
  
 for(i = 0; i < word.length; i++){
char = word[i].length + "<br>";
if(word[i].length<4){
  document.getElementById("NameError").innerHTML = "*Each word of name should cointain min 4 characters ";
  document.getElementById("submit").disabled = true;
  }
else if (word.length<2) {
document.getElementById("NameError").innerHTML = "*Name should contain atleast two words";
document.getElementById("submit").disabled = true;
}
else if (nameEx.test(name.value.toUpperCase()) == false ) {
 document.getElementById("Name_Error").innerHTML = "*Name should contain alphabets and spaces only";
 document.getElementById("submit").disabled = true;
}  
else{
document.getElementById("NameError").innerHTML = "";
document.getElementById("Name_Error").innerHTML = "";   
document.getElementById("submit").disabled = false;
}
}    
};



// ----------------------------------------------------------------------------------------------------------------


const phoneNumber = document.getElementById('phoneNumber');
phoneNumber.addEventListener('keydown',formatMob);
phoneNumber.addEventListener('keyup',formatToPhone);

const name = document.getElementById('name');
name.addEventListener('keydown',formatName);
name.addEventListener('keyup',formatToName);

//------------------------------------------------------------------------------------------------------------------
function mobOptr(){
if(620 < zip && zip < 800){
 document.getElementById("comLogo").style.display = "inline-block";
 document.getElementById("comLogo").src = "jio.png";
 document.getElementById("error").innerHTML = " ";
}
else if(800 < zip && zip < 919){
 document.getElementById("comLogo").style.display = "inline-block";
 document.getElementById("comLogo").src = "idea.png";
 document.getElementById("error").innerHTML = " ";
}
else if(920 < zip && zip < 1000){
 document.getElementById("comLogo").style.display = "inline-block";
 document.getElementById("comLogo").src = "vodafone.png";
 document.getElementById("error").innerHTML = " ";
}
else {
document.getElementById("comLogo").style.display = "none";
document.getElementById("error").style.display = "block";
document.getElementById("error").innerHTML = "*Invalid Mobile Number";

}
}

//---------------------------------------------------------------------------------------------------------------------
function displayStateName(){
    if(stateName[middle] === undefined ){
document.getElementById("stateName").innerHTML = "Invalide number";
}
}

setInterval(checkInput, 1);
function checkInput()
{
var nameF = document.getElementById("name");
var mobNum = document.getElementById("phoneNumber");
var email = document.getElementById("email");
if(nameF.value.length == 0)
{
document.getElementById("submit").disabled = true;
}
else if(mobNum.value.length == 0){
document.getElementById("submit").disabled = true;
}
else if(email.value.length == 0){
document.getElementById("submit").disabled = true;
}

}

form.addEventListener('submit', (e) => {
var form = document.getElementById("form");
var otp = Math.floor(1000 + Math.random() * 9000);
document.getElementById("otp1").innerHTML ="OTP is" + " " + otp;
document.getElementById("submit").disabled = true;
localStorage.setItem("firstName", word[0]);
localStorage.setItem("mobileNum", value);
localStorage.setItem("otp", otp);
url = "validate.html";
window.open(url); 
e.preventDefault();

})
