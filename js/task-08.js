const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event){
    event.preventDefault();

    const completedFormData = {
        email: event.currentTarget.elements.email.value,
        password: event.currentTarget.elements.password.value,
    }

    if(completedFormData.email === '' || completedFormData.password === ''){
        alert (`This form is incomplete. You can only submit this form after full completion.`);
    } else {
        console.log(completedFormData);
        event.currentTarget.reset();
    }  
}
