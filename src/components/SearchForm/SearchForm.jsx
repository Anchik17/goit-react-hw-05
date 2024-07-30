import { useState } from 'react';
import s from './SearchForm.module.css';

const SearchForm = ({ onSearch, initialQuery }) => {
  const [query, setQuery] = useState(initialQuery);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };
  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <input
        placeholder='Enter your query...'
        type='search'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={s.input}
      />
      <button type='submit' className={s.button}>
        Search
      </button>
    </form>
  );
};

export default SearchForm;
