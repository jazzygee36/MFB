import { useState } from 'react';
import Community from '../../../assets/icons/community';
import Market from '../../../assets/icons/market';
import Overview from '../../../assets/icons/overview';
import Portfolio from '../../../assets/icons/portfolio';
import Report from '../../../assets/icons/report';
import Settings from '../../../assets/icons/settings';

const Navigation = [
  { icon: <Overview />, title: 'Overview' },
  { icon: <Market />, title: 'Market' },
  { icon: <Portfolio />, title: 'Portfolio' },
  { icon: <Community />, title: 'Community' },
  { icon: <Report />, title: 'Report' },
  { icon: <Settings />, title: 'Settings' },
];

const Sidebar = () => {
  // Set default active index to 1 (Market)
  const [activeIndex, setActiveIndex] = useState<number>(1);

  return (
    <div className='h-screen px-2.5 py-10 bg-white'>
      {Navigation.map((navigate, index) => (
        <div
          key={index}
          onClick={() => setActiveIndex(index)}
          className={`group flex flex-col justify-center items-center cursor-pointer mb-10 ${
            activeIndex === index ? 'text-[#D71E0E]' : 'text-[#1E1E1E]'
          }`}
        >
          <div className='group-hover:text-[#D71E0E]'>{navigate.icon}</div>
          <h1 className='text-[12px] font-medium mt-[9px] group-hover:text-[#D71E0E]'>
            {navigate.title}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
