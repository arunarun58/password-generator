
const generator = document.getElementById("generate")
const copy_password = document.getElementById("copy-el")

generator.addEventListener("click", function() {
        const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#%^&*()_+-=[]{}|;':\"<>,.?/";
        const minLength = 12; 
        let password = ""; 
        let hasSpecialCharacter = false;
        let hasUpperCase = false;
         
        while (!hasSpecialCharacter || !hasUpperCase || password.length < minLength) {
            const randomChar = characters[Math.floor(Math.random() * characters.length)];
            if (!hasSpecialCharacter && !/[a-zA-Z0-9]/.test(randomChar)) {
                hasSpecialCharacter = true;
            }
            
            if (!hasUpperCase && /[A-Z]/.test(randomChar)) {
                hasUpperCase = true;
            }
            password += randomChar;
        }

    document.getElementById("password-el").value = password
    document.getElementById("info-el").innerText = ""
})


copy_password.addEventListener("click", function() {
   
var inputElement = document.getElementById("password-el");
inputElement.select();
document.execCommand("copy");
document.getElementById("info-el").innerText = "Password Copied"


})
