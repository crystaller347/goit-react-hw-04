import css from './ImageModal.module.css';
import Modal from 'react-modal';

export default function ImageModal({ images, close }) {
    return (
        <Modal onRequestClose={close}>
            <img src={images.urls.regular} alt={images.description} />
        </Modal>
    )
}