const scriptURL = 'https://script.google.com/macros/s/AKfycbwLi64qmzzDObixP7tmjx7m0DY-wn6_-_Fzdu6L_Y5eHYkOHmeQLim9TvP9chf_JCh8uw/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
       msg.innerHTML = "Thank You For Subscribing!" 
       
       setTimeout(function(){
          msg.innerHTML = ""
       }, 5000)
       form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})