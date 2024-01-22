//creamos una mini base de datos
const signupForm = document.querySelector('#signupForm')
signupForm.addEventListener('submit', (e)=>{//le recibe el evento submit
    e.preventDefault()//para que no se recargue el formulario
    const name = document.querySelector('#name').value//variables para recibir los campos del formulario,input del form
    const email = document.querySelector('#email').value//idem
    const password = document.querySelector('#password').value//idem

    //mi base, si tiene un usuario lo guarda en el storage y si no que asigne un array vacio
    const Users = JSON.parse(localStorage.getItem('users')) || []
    const isUserRegistered = Users.find(user => user.email === email)//comprara el mail que se acaba de ingresar con el del localstorage
    if(isUserRegistered){//por verdadero, quiere decir que existe
        return alert('El usuario ya esta registado!')
    }
    //si es false , no esta registrado, por lo cual asigna los valores
    Users.push({name: name, email: email, password: password})//con push cargo el vector
    localStorage.setItem('users', JSON.stringify(Users))  //lo guardo en le storage
    alert('Registro Exitoso!')
    window.location.href = 'login.html'//redireccion al login

})