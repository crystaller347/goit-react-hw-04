import css from './ImageModal.module.css';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
    }
};

Modal.setAppElement('#root');

export default function ImageModal({ isOpen, image, close }) {
    return (
        <Modal isOpen={isOpen}
            onRequestClose={close}
            style={customStyles}>
            <img src={image?.urls?.regular} alt={image?.description} />
        </Modal>
    )
}