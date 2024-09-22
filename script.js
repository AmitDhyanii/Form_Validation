var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function validateName(){
    var name = document.getElementById("name").value;

   if(name.length == 0)
   {
    nameError.innerHTML = "Name is required";
    return false;
   } 

   if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/))
   {
    nameError.innerHTML = "Write full name";
    return false;
   }
   nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
   return true;
}

function validatePhone(){
    var phone = document.getElementById("phone").value;

    if(phone.length == 0)
    {
        phoneError.innerHTML = "Phone no. is required";
        return false;
    }

    if(phone.length !== 10)
    {
        phoneError.innerHTML = "Please enetr 10 digit";
        return false;
    }

    if(!phone.match(/^[0-9]{10}$/))
    {
        phoneError.innerHTML = "only digits please ";
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateEmail(){
    var email = document.getElementById("email").value;

    if(email.length == 0)
    {
        emailError.innerHTML = "email is required";
        return false;
    }

    if(!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/))
    {
        emailError.innerHTML = "email invalid";
        return false;
    }

    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateMessage(){
    var message = document.getElementById("message").value;
    var required = 30;
    var left = required - message.length;

    if(left>0)
    {
        messageError.innerHTML = left + 'more characters required';
        return false;
    }

    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
}


function validateForm(){
    if(!validateName || !validatePhone || !validateEmail || validateMessage)
    {
        submitError.style.display = 'block';
        submitError.innerHTML = "Please fix errors";
        setTimeout(function(){
            submitError.style.display = 'none';
        }, 5000);
        return false;
    }
}