import { useState } from 'react';
import SearchBar from 'components/SearchBar';
import ImageGallery from 'components/ImageGallery';
import { AppS } from './App.styled';

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const getValuesForm = value => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  return (
    <AppS>
      <SearchBar onSubmit={getValuesForm} />
      <ImageGallery
        searchQuery={searchQuery}
        page={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </AppS>
  );
}
