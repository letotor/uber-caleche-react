import Modal from 'react-modal'
import './ContactModal.css'

Modal.setAppElement('#root')

export default function ContactModalSend(props) {
    const {isOpen, toggleModal} = props

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={toggleModal}
            contentLabel='My dialog'
            className='mymodal_contact'
            overlayClassName='myoverlay'
            closeTimeoutMS={500}
        >
            <div className='contact_message'>
                Nous avons bien reçu votre message et ne manquerons pas de vous répondre dans les meilleurs délais
            </div>
            <button className='modal-button-contact' onClick={toggleModal}>
                Fermer
            </button>
        </Modal>
    )
}