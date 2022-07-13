import {useState} from 'react'
import emailjs from '@emailjs/browser'
import ContactModalSend from './ContactModalSend'
import ContactModalDenied from './ContactModalDenied'

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [toggleDeniedisOpen, settoggleDeniedisOpen] = useState(false)

   function toggleModal() {
    setIsOpen(!isOpen)
  }

  function toggleDenied() {
    settoggleDeniedisOpen(!toggleDeniedisOpen)
  }

   function sendEmail (e)  {
     e.preventDefault()
     console.log(message.length)
     if (message.length !== 0) {      
     console.log('sendEmail')
      emailjs.sendForm('service_2bhksdl', 'template_v7rs7jo', e.target, process.env.REACT_APP_EMAIL_CODE)
        .then((result) => {
          console.log(result.text)
        }, (error) => {
          console.log(error.text)
        });
      e.target.reset()
      toggleModal()    
    } else {
      toggleDenied()
      console.log("email pas envoyé")
   }
  };

  return (
  <>
<form onSubmit={sendEmail} className="flex flex-col items-center justify-center ">
  <div className="flex items-center justify-center mb-3 mt-36 form-control">      
    <textarea className="w-screen h-48 textarea textarea-bordered" placeholder="Enter your message"    message='message'
                name= 'message'
                value={message} onChange={event => setMessage(event.target.value)}></textarea>  
  </div>
  <div className="flex items-center justify-center w-40 btn btn-outline">
    <button type='submit' >Send</button>
  </div>
</form>
<div>
  <ContactModalSend isOpen={isOpen} toggleModal={toggleModal} />
  <ContactModalDenied toggleDeniedisOpen={toggleDeniedisOpen} toggleDenied={toggleDenied} />
</div>  
</>
  )
}

export default Contact