import css from './ImageCard.module.css';

export default function ImageCard({ data, open }) {
    return (
        <div>
            <img onClick={() => open} src={data.urls.small} alt={data.description} />
        </div>
    )
}