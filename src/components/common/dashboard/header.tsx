import { useState, useRef, useEffect } from 'react';
import DashboardLogo from '../../../assets/dashboardLogo';
import DownArrow from '../../../assets/icons/downArrow';
import RightArrow from '../../../assets/icons/rightArrow';
import Sun from '../../../assets/icons/sun';
import { useNavigate } from 'react-router-dom';

const CashFlow = [
  {
    title: 'CASH BALANCE',
    cash: '8,374,763',
  },
  {
    title: 'SECURITIES VALUE',
    cash: '8,374,763',
  },
  {
    title: 'LOAN BALANCE',
    cash: '7,542,246',
  },
];

const Header = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // If dropdownRef and arrowRef are defined, and the click happened outside them:
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        arrowRef.current &&
        !arrowRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogOut = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <div className='w-full bg-[#FFFFFF] px-[15px] flex border-b-2 border-[#EDEDED] relative'>
      <div className='w-[90%] lg:w-[50%] md:[40%] flex justify-between items-center'>
        <DashboardLogo />
        <div className='hidden cursor-pointer rounded-full bg-[#F4F4F6] py-1 px-2 md:flex gap-1 items-center mr-[5%]'>
          <h4 className='text-[#1E1E1E] text-[7px] font-medium capitalize'>
            LIGHT
          </h4>
          <div className='bg-white rounded-full p-1'>
            <Sun />
          </div>
        </div>
      </div>

      <div className='hidden lg:w-[40%] md:w-[50%] border-r-2 border-l-2 border-[#EDEDED] md:flex items-center justify-between px-5'>
        <div>
          <RightArrow />
        </div>
        {CashFlow.map((flow, index) => (
          <div key={index}>
            <h2 className='text-[#778CA2] text-[10px] font-medium'>
              {flow.title}
            </h2>
            <h2 className='text-[#1E1E1E] text-[16px] font-[700]'>
              <span className='text-[12px]'>₦</span>
              {flow.cash}
            </h2>
          </div>
        ))}
      </div>
      <div className='w-[10%] flex items-center justify-end gap-2 relative'>
        <div className='bg-[#1E1E1E] text-[10px] font-bold text-center text-white py-[4px] px-[7px]'>
          DEMO
        </div>
        <div ref={arrowRef} onClick={toggleDropdown} className='cursor-pointer'>
          <DownArrow />
        </div>
        {dropdownOpen && (
          <div
            ref={dropdownRef}
            className='absolute right-0 top-full mt-2 bg-white border border-[#EDEDED] rounded shadow-md z-10'
          >
            <ul className='py-2'>
              <li
                className='px-4 py-1 hover:bg-gray-100 cursor-pointer'
                onClick={handleLogOut}
              >
                LogOut
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
