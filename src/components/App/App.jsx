import { useState, useEffect } from 'react';
import css from './App.module.css';
import { fetchImages } from '../../images-api.js';
import SearchBar from '../SearchBar/SearchBar.jsx';
import Loader from '../Loader/Loader.jsx';
import ErrorMessage from '../ErrorMessage/ErrorMessage.jsx';
import ImageGallery from '../ImageGallery/ImageGallery.jsx';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn.jsx';
import ImageModal from '../ImageModal/ImageModal.jsx';

export default function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }
    const handleSubmit = async (query, page) => {
      try {
        setImages([]);
        setError(false);
        setLoading(true);
        const data = await fetchImages(query);
        setImages(data);
        setTotalPages(data.total_pages);
        setPage(page + 1);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    handleSubmit();
  }, [query, page]);

  const openModal = () => {
    setModal(true);
  }

  const closeModal = () => {
    setModal(false);
  }

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && <ImageGallery items={images} open={openModal} />}
      {images.length > 0 && page <= totalPages && <LoadMoreBtn />}
      <ImageModal images={images} isOpen={modal} close={closeModal} />
    </div>
  )
}
