var contact = document.querySelector("[href='#contact']");
var contactForm = document.querySelector('#contact');
var signIn = document.querySelector('.get_it');
var cancelBtn = document.querySelector("input[value='cancel']");
var logInForm = document.querySelector('#sign_in');
/*///////////////////////////
click on contact to see the contact form/ click cancel to exit the form
//////////////*/
 contactForm.style.display = 'none'; 
 logInForm.style.display = 'none';

contact.addEventListener('click', function(){
   contactForm.style.display = 'block'
       
} );

cancelBtn.addEventListener('click', function() {
    contactForm.style.display = 'none';
    
})


/* log in form  */

signIn.addEventListener('click', function() {
    logInForm.style.display = 'block';
})

