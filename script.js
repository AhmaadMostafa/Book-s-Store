

const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");

registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click',()=>{
    window.location.href = "../main.html";
    wrapper.classList.remove('active-popup');
});


function updateRegistrationMessage(message, isSuccess) {
    const registrationMessageDiv = document.getElementById('registrationMessage');
    registrationMessageDiv.textContent = message;
    registrationMessageDiv.style.color = isSuccess ? 'green' : 'red';

    setTimeout(function () {
        if(isSuccess){
        window.location.href = "store.html";
        }
    }, 1000); 
}

function updateLoginMessage(message, isSuccess) {
    const loginMessageDiv = document.getElementById('loginMessage');
     loginMessageDiv.textContent = message;
     loginMessageDiv.style.color = isSuccess ? 'green' : 'red';

    
    setTimeout(function () {
        if(isSuccess){
            window.location.href = "store.html";
            }
    }, 1000); 
}
