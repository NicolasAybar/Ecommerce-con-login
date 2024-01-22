const loginForm = document.querySelector('#loginForm')
loginForm.addEventListener('submit', (e)=>{
    e.preventDefault()/*evitar que se recargue el html*/ 
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    //traemos la bsase del storage, users es la clave del storage
    const Users = JSON.parse(localStorage.getItem('users')) || []
    const validUser = Users.find(user => user.email === email && user.password === password)
    if(!validUser){//buscar si el mail y clave coinciden, se logueo correctamente
        return alert('Usuario y/o contraseña incorrectos!')
    }
    alert(`Bienvenido ${validUser.name}`)
    localStorage.setItem('login_success', JSON.stringify(validUser))//capturo el usuario logueado desde el storage
    window.location.href = '../admin/admin.html'   

})