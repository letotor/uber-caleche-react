import emailjs from '@emailjs/browser';
import { useState } from 'react';
import ContactModalDenied from './ContactModalDenied';
import ContactModalSend from './ContactModalSend';

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [toggleDeniedisOpen, settoggleDeniedisOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  function toggleDenied() {
    settoggleDeniedisOpen(!toggleDeniedisOpen);
  }

  function sendEmail(e) {
    e.preventDefault();
    if (message.length !== 0) {
      console.log('sendEmail');
      emailjs
        .sendForm(
          'service_2bhksdl',
          'template_v7rs7jo',
          e.target,
          process.env.REACT_APP_EMAIL_CODE
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target.reset();
      toggleModal();
    } else {
      toggleDenied();
      console.log('email pas envoyé');
    }
  }

  return (
    <>
      <form
        onSubmit={sendEmail}
        className="flex flex-col items-center justify-center px-4"
      >
        <div className="flex items-center justify-center w-full mb-3 mt-36 form-control">
          <h2 className="mb-4 text-2xl font-bold">Contact us</h2>
          <textarea
            className="w-full max-w-3xl h-48 textarea textarea-bordered"
            placeholder="Enter your message"
            message="message"
            name="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          ></textarea>
        </div>
        <div className="flex items-center justify-center w-40 btn btn-outline">
          <button type="submit">Send</button>
        </div>
      </form>
      <div>
        <ContactModalSend isOpen={isOpen} toggleModal={toggleModal} />
        <ContactModalDenied
          toggleDeniedisOpen={toggleDeniedisOpen}
          toggleDenied={toggleDenied}
        />
      </div>
    </>
  );
};

export default Contact;
