var contact = document.querySelector("[href='#contact']");
var contactForm = document.querySelector('#contact');
var signIn = document.querySelector('.get_it');
var cancelBtn = document.querySelector("input[value='cancel']");
/*///////////////////////////
click on contact to see the contact form 
//////////////*/
 contactForm.style.display = 'none';

contact.addEventListener('click', function(){
   contactForm.style.display = 'block'
       
} );

cancelBtn.addEventListener('click', function() {
    contactForm.style.display = 'none';
    
})
