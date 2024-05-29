const scriptURL = 'https://script.google.com/macros/s/AKfycbwJNF-_VCLXC1a3EOGmVGvEDThTt-6gBxSsdEniVQyD0IYgYx7Pp7vbOp5AeHnHkzKN0g/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function(){
                msg.innerHTML = ""
            },2000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })