import { useState } from 'react';
import css from './App.module.css';
import { fetchImages } from '../../images-api.js';
import SearchBar from '../SearchBar/SearchBar.jsx';
import Loader from '../Loader/Loader.jsx';
import ErrorMessage from '../ErrorMessage/ErrorMessage.jsx';
import ImageGallery from '../ImageGallery/ImageGallery.jsx';

export default function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (topic) => {
    try {
      setImages([]);
      setError(false);
      setLoading(true);
      const data = await fetchImages(topic);
      setImages(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && <ImageGallery />}
    </div>
  )
}
