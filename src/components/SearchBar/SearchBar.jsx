import { useState } from 'react';
import { Input, SearchForm, Searchbar } from './SearchBar.styled';

export default function SearchBar({ onSubmit }) {
  const [value, setValue] = useState('');

  const onChangeInput = e => {
    setValue(e.currentTarget.value);
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    onSubmit(value);

    setValue('');
  };

  return (
    <Searchbar>
      <SearchForm onSubmit={handleSubmitForm}>
        <Input
          type="text"
          placeholder="Search images and photos"
          value={value}
          onChange={onChangeInput}
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </SearchForm>
    </Searchbar>
  );
}
