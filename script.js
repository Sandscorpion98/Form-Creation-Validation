


document.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById("registration-form");

    const feedbackDiv = document.getElementById("form-feedback");

    form.addEventListener("submit", (event)=> {
        event.preventDefault();
    

        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        let isvalid = true;

        let messages = [];

        if (username.length < 3){
            isvalid = false;
            messages.textcontent = "Username must be at least 3 characters long.";
            return;
        } else {
            messages.textcontent = " ";
        }

        if(!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)){
            isvalid = false;
            messages.textcontent = 'Please enter a valid email address.';
            return;
        }else {
            messages.textcontent = " ";
        }

        if(password.length < 8){
            isvalid = false;
            messages.textcontent = 'Password must be at least 6 characters long.';
            return;
        }else {
            messages.textcontent = " ";
        }

        feedbackDiv.style.display ="block";

        if(isvalid){
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
        }else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545";
        }
    })

})