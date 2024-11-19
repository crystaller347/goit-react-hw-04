import css from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({ loadMore }) {
    return (
        <button onClick={loadMore}>Load more</button>
    )
}