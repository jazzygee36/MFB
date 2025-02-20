import { useState } from 'react';
import MainDashboard from '../../common/dashboard';
import BidPriceTable from './bidPriceTable';
import OfferPriceTable from './offerPriceTable';
import TradeLogTable from './tradeLog';

const Board = [
  { title: 'X-Traded' },
  { title: 'OTC' },
  { title: 'FI' },
  { title: 'Derivatives' },
];

const Product = [
  { title: 'All' },
  { title: 'SMAZ' },
  { title: 'SBBS' },
  { title: 'SPRL' },
  { title: 'SGNG' },
  { title: 'SSGM' },
  { title: 'FETC' },
  { title: 'SCOC' },
];

const Dashboard = () => {
  const [activeBoard, setActiveBoard] = useState<string>(Board[0].title);
  const [activeProduct, setActiveProduct] = useState<string>('All');

  return (
    <MainDashboard>
      <div className='w-full'>
        <div className='bg-white py-3.5 px-2 h-full w-full flex flex-col mb-2.5'>
          {/* Board Section */}
          <div className='flex items-center gap-4 flex-wrap'>
            <h1 className='text-[#1E1E1E] text-[14px] font-medium mr-6 hidden md:block'>
              Board
            </h1>
            {Board.map((board, index) => (
              <div
                key={index}
                onClick={() => setActiveBoard(board.title)}
                className={`rounded-full text-[14px] font-medium cursor-pointer p-2.5 
                ${
                  activeBoard === board.title
                    ? 'bg-[#D71E0E] text-white'
                    : 'bg-[#F8FAFB] text-[#1E1E1E]'
                }`}
              >
                <h2>{board.title}</h2>
              </div>
            ))}
          </div>

          {/* Product Section */}
          <div className='flex items-center gap-4 mt-4 flex-wrap'>
            <h1 className='text-[#1E1E1E] text-[14px] font-medium mr-6 hidden md:block'>
              Product
            </h1>
            {Product.map((product, index) => (
              <div
                key={index}
                onClick={() => setActiveProduct(product.title)}
                className={`rounded-full text-[14px] font-medium cursor-pointer px-5 py-2.5
                ${
                  activeProduct === product.title
                    ? 'bg-[#D71E0E] text-white'
                    : 'bg-[#F8FAFB] text-[#1E1E1E]'
                }`}
              >
                <h2>{product.title}</h2>
              </div>
            ))}
          </div>
        </div>
        <div className='grid  grid-cols-1 md:grid-cols-2 gap-[9px] w-full'>
          <BidPriceTable />
          <OfferPriceTable />
        </div>

        <div className='mt-1'>
          <TradeLogTable />
        </div>
      </div>
    </MainDashboard>
  );
};

export default Dashboard;
