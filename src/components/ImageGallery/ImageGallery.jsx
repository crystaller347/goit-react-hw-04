import css from './ImageGallery.module.css'
import ImageCard from '../ImageCard/ImageCard.jsx';

export default function ImageGallery({ items }) {
    return (
        <ul>
            {items.map((item) => (
                <li key={item.id}>
                    <ImageCard data={item} />
                </li>
            ))}
        </ul>
    )
}