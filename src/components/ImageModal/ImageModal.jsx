import css from './ImageModal.module.css';
import Modal from 'react-modal';

export default function ImageModal({ images, isOpen, close }) {
    return (
        <Modal isOpen={isOpen} onRequestClose={close}>
            <img src={images.urls.regular} alt={images.description} />
        </Modal>
    )
}