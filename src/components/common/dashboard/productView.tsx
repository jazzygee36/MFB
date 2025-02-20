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
    <div className='p-2 bg-white h-[352px]'>
      <input
        type='text'
        placeholder='search'
        className='w-[191px] h-[27px] outline-none bg-[#F8FAFB] border border-[#D6D6D6] rounded-[1.5px]'
      />
      {Production.map((view, index) => {
        const isActive = activeIndex === index;
        return (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`flex gap-4 items-center my-8 cursor-pointer ml-6 ${
              isActive ? 'text-red-500' : 'text-[#1E1E1E]'
            } hover:text-red-500`}
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
