const LiveMarket = [
  { title: 'Soybean (SBBS)', cash: '₦30,834.59' },
  { title: 'Sorghum (SSGM)', cash: '₦30,834.59' },
  { title: 'Paddy Rice (SPRL)', cash: '₦30,834.59' },
  { title: 'Cocoa (SCOC)', cash: '₦30,834.50' },
  { title: 'Maize (SMAZ)', cash: '₦30,834.50' },
  { title: 'Soybean (SBBS)', cash: '₦30,834.59' },
  { title: 'Sorghum (SSGM)', cash: '₦30,834.59' },
];

const Footer = () => {
  return (
    <>
      {/* Inline style for keyframes */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(50%); }
          }
        `}
      </style>
      <div className='w-full bg-[#FFFFFF] flex border-t-2 border-[#EDEDED] items-center'>
        <div className='bg-[#000000] w-[20%] md:w-[13%] font-roboto text-white text-[10px] md:text-[18px] px-5 md:px-9 py-1.5 md:py-3.5 font-medium text-center'>
          Live Market
        </div>
        {/* Marquee container */}
        <div className='relative flex-1 overflow-hidden'>
          <div
            className='flex space-x-8'
            style={{
              animation: 'marquee 20s linear infinite',
              width: '200%', // make sure to span beyond the view
            }}
          >
            {LiveMarket.concat(LiveMarket).map((market, index) => (
              <div key={index} className='flex flex-col whitespace-nowrap'>
                <h1 className='text-[#000000] text-[14px] font-medium'>
                  {market.title}
                </h1>
                <h1 className='text-[#000000] text-[14px] font-[400]'>
                  {market.cash}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
