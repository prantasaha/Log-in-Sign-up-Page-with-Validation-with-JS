document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");
     

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form-hidden");
        createAccountForm.classList.remove("form-hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form-hidden");
        createAccountForm.classList.add("form-hidden");
    });
});

    const form = document.getElementById('form');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const password = document.getElementById('password');
    const cpassword = document.getElementById('cpassword');
    
    form.addEventListener('submit', e => {
        e.preventDefault();
        validate();
    })
    
    const isEmail = (emailVal) => {
        var atSymbol = emailVal.indexOf("@");
        if(atSymbol < 1)return false;
        var dot = emailVal.lastIndexOfindexOf(".");
        if(dot <= atSymbol + 2) return false;
        if(dot === emailVal.length - 1) return false;
        return true;
    }
    
    const validate = () => {
        const usernameVal = username.value.trim();
        const emailVal = email.value.trim();
        const phoneVal = phone.value.trim();
        const passwordVal = password.value.trim();
        const cpasswordVal = cpassword.value.trim();
        
        //validating username
        if(usernameVal === ""){
            setErrorMsg(username, 'username cannot be blank');
        }else if(usernameVal.length <= 5){
            setErrorMsg(username, 'username min contain 6 characters');
        }else{
            setSuccessMsg(username);
        }
        
        //validating mail
        if(emailVal === ""){
            setErrorMsg(email, 'email cannot be blank');
        }else if(!isEmail(emailVal)){
            setErrorMsg(email, 'not a valid email');
        }else{
            setSuccessMsg(email);
        }
        
        //validating phone
        if(phoneVal === ""){
            setErrorMsg(phone, 'number cannot be blank');
        }else if(phoneVal.length != 10){
            setErrorMsg(phone, 'not a valid number');
        }else{
            setSuccessMsg(phone);
        }
        
        //validating password
        if(passwordVal === ""){
            setErrorMsg(password, 'password cannot be blank');
        }else if(passwordVal.length <= 5){
            setErrorMsg(password, 'password must contain 6 character');
        }else{
            setSuccessMsg(password);
        }
        
        //validating cpassword
        if(cpasswordVal === ""){
            setErrorMsg(cpassword, 'password cannot be blank');
        }else if(passwordVal !== cpasswordVal){
            setErrorMsg(cpassword, 'passwords are not matching');
        }else{
            setSuccessMsg(cpassword);
        }
    }
    
    function setErrorMsg(input, errormsgs){
        const formControl = input.parentElement;
        const sml = formControl.querySelector(".form_input-error-message");
        formControl.className= "form_input-group error";
        sml.textContent = errormsgs;
        
    }

    function setSuccessMsg(input){
        const formControl = input.parentElement;
        formControl.className = "form_input-group success";
    }
    

    
     
          
