const BidPrice = [
  {
    product: 'Soybeans (SSBS) ',
    quantity: '2023',
    price: '1736.92',
    buy: 'Buy',
  },
  {
    product: 'Paddy Rice (SPRL) ',
    quantity: '11293',
    price: '3627.00 ',
    buy: 'Buy',
  },
  {
    product: 'Maize (SMAZ)',
    quantity: '1832',
    price: '8294.01',
    buy: 'Buy',
  },
  {
    product: 'Sorghum (SSGM) ',
    quantity: '29102',
    price: '8192.00',
    buy: 'Buy',
  },
  {
    product: 'Fair Trade ETC (FETC) ',
    quantity: '3212',
    price: '1736.92',
    buy: 'Buy',
  },
  {
    product: 'Fair Trade ETC (FETC) ',
    quantity: '3212',
    price: '1736.92',
    buy: 'Buy',
  },
];

const BidPriceTable = () => {
  return (
    <div className='overflow-x-auto'>
      <table className='min-w-full border-collapse bg-white'>
        <thead>
          <tr className='border-b-3 border-[#F2F4F6] text-[#778CA2] text-[12px] font-medium'>
            <th className='px-4 py-3 border-b-2 border-[#F2F4F6] text-left'>
              Products
            </th>
            <th className='px-4 py-3 border-b-2 border-[#F2F4F6] text-left'>
              Quantity
            </th>
            <th className='px-4 py-3 border-b-2 border-[#F2F4F6] text-left'>
              Bid Price
            </th>
            <th className='px-4 py-3 border-b-2 border-[#F2F4F6] text-left'>
              Action
            </th>
          </tr>
        </thead>
      </table>
      {/* Wrap tbody in a scrollable container */}
      <div className='max-h-[250px] overflow-y-auto'>
        <table className='min-w-full border-collapse bg-white'>
          <tbody>
            {BidPrice.map((price, index) => (
              <tr
                key={index}
                className='text-[#1E1E1E] text-[14px] font-medium'
              >
                <td className='px-4 py-4 border-b-2 border-[#F2F4F6]'>
                  {price.product}
                </td>
                <td className='px-4 py-4 border-b-2 border-[#F2F4F6]'>
                  {price.quantity}
                </td>
                <td className='px-4 py-4 border-b-2 border-[#F2F4F6] text-[#52965E]'>
                  {price.price}
                </td>
                <td className='px-4 py-4 border-b-2 border-[#F2F4F6] text-[#52965E] cursor-pointer'>
                  <div className='border border-[#52965E] rounded-md py-1 px-2.5 text-center'>
                    {price.buy}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BidPriceTable;
