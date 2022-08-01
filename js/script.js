const signupbtn =  document.getElementById('signup'),
signinbtn =  document.getElementById('signin'),
container = document.getElementById('container');

signupbtn.addEventListener('click',()=>{
    container.classList.add('right-panel-active');
})
