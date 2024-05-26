const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let password=""
let count = 8
let passwordEl = document.getElementById("password-el")
let passwordBtn = document.getElementById("password-btn")


function generate(){

    if (password === ""){
        for(i= 0; i<8; i++){
            let randomChar = Math.floor(Math.random()*characters.length) // number of the characters array
            password += characters[randomChar]
            passwordEl.textContent = password
        }
    }

}

function copyTextToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            alert('Password copied to clipboard!');
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
}

function copyPassword(){
    copyTextToClipboard(password);
}
// passwordEl.addEventListener('click', function() {
//     // Create a textarea element
//     const textarea = document.createElement('textarea');
//     // Set its value to the password text content
//     textarea.value = passwordEl.textContent;
//     // Append the textarea to the document body
//     document.body.appendChild(textarea);
//     // Select the text in the textarea
//     textarea.select();
//     // Execute the copy command
//     document.execCommand('copy');
//     // Remove the textarea from the document
//     document.body.removeChild(textarea);
//     // Provide feedback to the user
//     alert('Password copied to clipboard!');
// });


