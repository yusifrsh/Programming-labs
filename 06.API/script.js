// // DOM (Document Object Model)

const form = document.querySelector('.myForm')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirmPassword')
const submitBtn = document.querySelector('#btnSubmit')
const checkbox = document.querySelector('#isAdmin')



form.addEventListener('submit', (e) => {
    e.preventDefault()
    const user = {
        name: username.value,
        email: email.value,
        password: password.value,
        confirmPassword: confirmPassword.value
    }
    if (password.value !== confirmPassword.value) {
        alert('Confirm password is not match password')
        return
    } else if (isAdmin.checked){
        window.location.href = 'user.html'
    } else {
        alert('You are User!')
    }
    console.log('user', user);
})


function removeDisabled(anyInput) {
    anyInput.addEventListener('change', () => {
        if (username.value && email.value && password.value && confirmPassword.value  && username.value.length > 5 && email.value.length > 5 && password.value.length > 5 && confirmPassword.value.length > 5) {
            submitBtn.removeAttribute('disabled')
        } else {
            submitBtn.setAttribute('disabled', true)
        }
    })
}

removeDisabled(username)
removeDisabled(email)
removeDisabled(password)
removeDisabled(confirmPassword)

