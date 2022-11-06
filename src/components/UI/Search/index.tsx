import React from 'react';

const Search: React.FC = () => {
  return (
    <input
      type="text"
      style={{
        backgroundImage: `url('./assets/img/icons/search-icon.svg')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '20px center',
      }}
      placeholder={'Поиск...'}
      className="py-2 pl-12 pr-2 bg-amber-50 border-stone-900 border rounded-xl "
    />
  );
};

export default Search;
