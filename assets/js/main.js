document.addEventListener('DOMContentLoaded',function(){
  var toggle=document.getElementById('nav-toggle');
  var nav=document.getElementById('main-nav');
  if(toggle){toggle.addEventListener('click',function(){
    if(nav.style.display==='block'){nav.style.display='none'}else{nav.style.display='block'
    }})}

  var form=document.getElementById('contact-form');
  if(form){form.addEventListener('submit',function(e){
    e.preventDefault();
    alert('This is a static form placeholder. Replace the form action with your form endpoint (Formspree/Netlify/API).');
  })}});