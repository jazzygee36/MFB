import { useState } from 'react';
import CancelledTrade from '../../../assets/icons/cancelledTrade';
import OpenOrder from '../../../assets/icons/openOrder';
import OrderBook from '../../../assets/icons/orderBook';
import PriceHistory from '../../../assets/icons/priceHistory';
import ProductViewIcon from '../../../assets/icons/productView';

const Production = [
  {
    icon: <ProductViewIcon />,
    title: 'Product View ',
  },
  {
    icon: <OrderBook />,
    title: 'Order Book  ',
  },
  {
    icon: <PriceHistory />,
    title: 'Price History ',
  },
  {
    icon: <OpenOrder />,
    title: 'Open Orders ',
  },
  {
    icon: <CancelledTrade />,
    title: 'Cancelled Trades',
  },
];

const ProductView = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Default active index is 1 ("Order Book")

  return (
    <div className='p-2 bg-white h-[352px] hidden md:block'>
      <div className='relative w-[191px] h-[27px]'>
        <svg
          className='absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#B3B3B3]'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z'
          />
        </svg>
        <input
          type='text'
          placeholder='Search'
          className='placeholder:text-[12px]  placeholder:font-medium w-full h-full pl-8 pr-2 outline-none bg-[#F8FAFB] border border-[#D6D6D6] rounded-[1.5px]'
        />
      </div>

      {Production.map((view, index) => {
        const isActive = activeIndex === index;
        return (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`flex gap-4 items-center my-8 cursor-pointer ml-6 ${
              isActive ? 'text-[#D71E0E]' : 'text-[#1E1E1E]'
            } hover:text-[#D71E0E]`}
          >
            {/* Icon inherits color */}
            <div>{view.icon}</div>
            <h2 className='text-[14px] font-medium'>{view.title}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default ProductView;
