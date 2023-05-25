window.onload = function() {
  

    // listen for auth status changes
  auth.onAuthStateChanged(user => {
    if (!user) {
      window.location = "index.html"
    }
  });
};

