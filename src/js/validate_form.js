let button = document.querySelector('button'),
    fname = document.querySelector('#firstName'),
    lname = document.querySelector('#lastName'),
    email = document.querySelector('#email'),
    validate = document.querySelector('.validate'),
    homeOwnerYes = document.querySelector('#homeOwnerYes'),
    homeOwnerNo = document.querySelector('#homeOwnerNo'),
    buyingWhen = document.querySelector("#buyingWhen")








//validate function
let validateForm = e => {
    e.preventDefault();
    validate.innerHTML = '',
        validate_fname = fname.value.trim(),
        validate_lname = lname.value.trim(),
        re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
        email_value = email.value,
        validate_email = re.test(String(email_value).toLowerCase())





    if (validate_fname == '' || validate_lname == '' || validate_email == '') {

        validate_fname == '' ? validate.innerHTML += '<li>Your first name is empty</li>' : '';


        validate_lname == '' ? validate.innerHTML += '<li>Your last name is empty</li>' : '';


        !validate_email ? validate.innerHTML += '<li>Your email is not correct</li>' : ''

    } else {
        let homeowner = homeOwnerYes.checked ? true : false
        sendForm(validate_fname, validate_lname, email_value, homeowner)
    }




}

let sendForm = (fname, lname, email, homeowner) => {
    console.log(fname, lname, email, homeowner, buyingWhen.value)


    let url = `/send.php`,
        formData = new FormData();


    formData.append("fname", fname);
    formData.append("lname", lname);
    formData.append("email", email);
    formData.append("homeowner", homeowner);
    formData.append("buyingWhen", buyingWhen.value);
    validate.innerHTML = "<li>Thank you for your subscription</li>"
    fetch(url, {
        method: "POST",
        body: formData
    })
        .then(res => res.json())
        .then(data => {



        })
        .catch(err => console.log(err))
}

button.addEventListener('click', validateForm)

