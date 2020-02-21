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




    //if required fields are empty
    if (validate_fname == '' || validate_lname == '' || validate_email == '') {

        validate_fname == '' ? validate.innerHTML += '<li>Your first name is empty</li>' : '';


        validate_lname == '' ? validate.innerHTML += '<li>Your last name is empty</li>' : '';


        !validate_email ? validate.innerHTML += '<li>Your email is not correct</li>' : ''

    } else {
        let homeowner = homeOwnerYes.checked ? true : false
        sendForm(validate_fname, validate_lname, email_value, homeowner)
    }




}

//sending form function
let sendForm = (firstname, lastname, email_value, homeowner) => {
    console.log(firstname, lastname, email_value, homeowner, buyingWhen.value)


    //reset form
    fname.value = ''
    lname.value = ''
    email.value = ''
    homeowner.value = ''
    homeOwnerYes.checked = ''
    homeOwnerNo.checked = ''




    let url = `/dummy.php`,
        formData = new FormData();


    // create body for POST
    formData.append("fname", firstname);
    formData.append("lname", lastname);
    formData.append("email", email_value);
    formData.append("homeowner", homeowner);
    formData.append("buyingWhen", buyingWhen.value);


    //sending messgae
    validate.innerHTML = "<li>Thank you for your subscription</li>"


    //fetch data from server
    fetch(url, {
        method: "POST",
        body: formData
    })
        .then(res => res.json())
        .then(data => {



        })
        .catch(err => console.log(err))
}


//button click event
button.addEventListener('click', validateForm)

