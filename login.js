window.onload=function(){
    
    // login
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // get user info
        const email = loginForm['email_field'].value;
        const password = loginForm['password_field'].value;

        auth.signInWithEmailAndPassword(email, password).then(cred => {
            // reset form and redirect to home
            loginForm.reset();
            auth.onAuthStateChanged(user => {
                if (user) {
                  window.location = "home.html";
                }
            })
        });
    });

  
}