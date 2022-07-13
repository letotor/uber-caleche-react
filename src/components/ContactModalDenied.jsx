import Modal from 'react-modal'
import './ContactModal.css'

Modal.setAppElement('#root')

export default function ContactModalDenied(props) {
  const {toggleDeniedisOpen, toggleDenied} = props

    return (
        <Modal
          isOpen={toggleDeniedisOpen}
          onRequestClose={toggleDenied}
          contentLabel='My dialog'
          className='mymodal_denied'
          overlayClassName='myoverlay'
          closeTimeoutMS={500}>
          <div className='contact_denied'>
           Nous vous remercions de bien vouloir compléter le formulaire afin de valider votre envoi
          </div>
          <button className='modal-button-denied' onClick={toggleDenied}>
            Fermer
          </button>
        </Modal>
    )
}