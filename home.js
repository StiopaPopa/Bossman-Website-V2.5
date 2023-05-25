



var slideIndex = 1;

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}





window.onload = function() {
  
    // check if user is logged in
  var user = auth.currentUser;
  if(user==null) {
    window.location = "index.html";
  }

    // listen for auth status changes
  auth.onAuthStateChanged(user => {
    if (!user) {
      window.location = "index.html"
    }
  });
    
    // logout method
  const logout = document.getElementById('logout');
  logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
  });

};

