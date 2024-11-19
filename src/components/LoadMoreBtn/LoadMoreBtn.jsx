import css from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({ handlePage }) {
    const handleClick = () => {
        handlePage(page + 1);
    }

    return (
        <button onClick={handleClick}>Load more...</button>
    )
}