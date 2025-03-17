const scriptURL = 'https://script.google.com/macros/s/AKfycbyBTRvEwGOY2JGGg0BWBDrG6I7V1CY5Df8mwJjEaGB5du3cFSkmnJYZbn-V5nXcuozExg/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById("msg")
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML = "Thank you for Subscribing!"
                setTimeout(function(){
                    msg.innerHTML = ""
                },5000)
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
        })