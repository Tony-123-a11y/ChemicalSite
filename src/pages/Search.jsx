import { FaSearchMinus } from 'react-icons/fa';

const Search = () => {
  
  const results = [];

  return (
    <div className="min-h-[60vh] flex items-center justify-center text-center px-4">
      {results.length === 0 ? (
        <div>
          <FaSearchMinus className="mx-auto text-gray-400 mb-4" size={96} />
          <h2 className="text-2xl font-semibold text-gray-600">No results found</h2>
          <p className="text-gray-500 mt-2">Try a different keyword or check your spelling.</p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Search;
