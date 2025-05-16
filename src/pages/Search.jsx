import { FaSearchMinus } from 'react-icons/fa';
import { products as results} from '../data.js';
import chemical from '../assets/chemical.jpg'
import clsx from 'clsx';
import { Link } from 'react-router-dom';
const Search = () => {
  
  // const results = [results];

  return (
    <div className=" flex  justify-center  px-4 py-4 bg-gray-100">
      {results.length === 0 ? (
        <div className='text-center'>
          <FaSearchMinus className="mx-auto text-gray-400 mb-4" size={96} />
          <h2 className="text-2xl font-semibold text-gray-600">No results found</h2>
          <p className="text-gray-500 mt-2">Try a different keyword or check your spelling.</p>
        </div>
      ) : (
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
    {results.map((product,i) => (
      <div key={product.id} className={clsx('bg-white border pb-4 border-gray-200 p-2 flex flex-col justify-between rounded-md')}>
       <div className="">
         <img src={chemical}  className="  rounded-t-md object-cover  w-full mb-4" />
       <div className="px-2 ">
         <h2 className="text-base font-semibold font-['poppins']">{product.name}</h2>
        <p className="text-gray-600 text-sm leading-snug font-inter line-clamp-2 ">{product.description}</p>
        
       
      </div>
       </div>
        <div className="flex px-2 mt-2 justify-between items-center "><p className=" text-green-600 text-lg font-medium">
          ₹{product.packagingOptions[0]?.price.toFixed(2)}
        </p>
        <Link to={'/productDetails'} state={product} className="text-red-600 hover:underline cursor-pointer font-medium text-sm">Read more</Link>
        </div>
       </div>
    ))}
  </div>
      )}
    </div>
  );
};

export default Search;
