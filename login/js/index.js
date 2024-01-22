//busca la variable creada en el login.js
const user = JSON.parse(localStorage.getItem('login_success')) || false
if(!user){
    window.location.href = 'login.html'//si el usuario no ingreso correct// los datos
}

const logout = document.querySelector('#logout')

logout.addEventListener('click', ()=>{
    alert('Hasta pronto!')
    localStorage.removeItem('login_success')//vaciamos el storage
    window.location.href = 'login.html'
})