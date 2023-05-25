window.onload=function(){
    
    // signup
    const signupForm = document.getElementById('signup-form');
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // get user info
        username = signupForm['username_field'].value;
        email = signupForm['email_field'].value;
        password = signupForm['password_field'].value;
        sector = signupForm['select_sector'].value;

          // create new user doc in firestore
        /*db.collection('users').add({
            email: email,
            sector: sector,
            username: username
        }).then(() => {
        console.log('new user info added');
        });*/



        // sign up the user
        auth.createUserWithEmailAndPassword(email, password).then(cred => {
            signupForm.reset();
            window.location.href = "home.html";

        });
    });

  
};



