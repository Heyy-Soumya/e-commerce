import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../../features/products/productsSlice';
import { debounce } from '../../utils/debounce';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const SearchBar = () => {
  const [keyword, setKeyword] = useState('');
  const dispatch = useDispatch();

  // debounced dispatch (300 ms)
  const handleChange = debounce((value) => {
    dispatch(setSearchTerm(value));
  }, 300);

  const onInput = (e) => {
    const val = e.target.value;
    setKeyword(val);
    handleChange(val);
  };

  return (
    <div className="relative w-full max-w-sm">
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
      <input
        type="text"
        placeholder="Search products..."
        value={keyword}
        onChange={onInput}
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
      />
    </div>
  );
};

export default SearchBar;