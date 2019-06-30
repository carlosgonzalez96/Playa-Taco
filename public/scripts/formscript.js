function checkInput() {
    const fname = document.forms["PlayaTacoForm"]["firstname"];
    const lname = document.forms["PlayaTacoForm"]["lastname"];
    const email = document.forms["PlayaTacoForm"]["email"];
    const mssg = document.forms["PlayaTacoForm"]["message"];

    const errMssg = document.getElementById('fillout');

    if(fname.value == "") {
        fname.style.border = "2px solid red";
        errMssg.style.color = "#f05133"
        return false;
    }

    if(lname.value == "") {
        lname.style.border = "2px solid red";
        errMssg.style.color = "#f05133"
        return false;
    }

    if(email.value == "") {
        email.style.border = "2px solid red";
        errMssg.style.color = "#f05133"
        return false;
    }

    if(mssg.value == "") {
        mssg.style.border = "2px solid red";
        errMssg.style.color = "#f05133"
        return false;
    }

}

function validateForm() {
    console.log(checkInput());

    if(checkInput() == false) {
        return false;
    } else {
        return true;
    }
}