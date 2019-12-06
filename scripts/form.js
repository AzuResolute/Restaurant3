// validate forms

let IsValid = () => {
    let {name, email, phone} = document.contact;
    let validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let validPhone = /((\(\d{3}\) ?)|(\d{3}-)) ?\d{3}-\d{4}$/;
    
    if(name.value === "" ) {
        name.focus() ;
        alert("Invalid Name");
        return false;
    } else if (email.value === "" || !validEmail.test(email.value)) {
        email.focus();
        alert("Invalid Email");
        return false;
    } else if (phone.value === "" || !validPhone.test(phone.value)) {
        email.focus();
        alert("Invalid Phone");
        return false;
    } else {
        return true;
    }
}

let Send = () => {
    if(IsValid()){
        alert("Input Validated and Received. Thanks!");
    }
}