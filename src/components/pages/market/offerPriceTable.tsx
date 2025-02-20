const BidPrice = [
  {
    product: 'Soybeans (SSBS) ',
    quantity: '2023',
    price: '1736.92',
    sell: 'Sell',
  },
  {
    product: 'Paddy Rice (SPRL) ',
    quantity: '11293',
    price: '3627.00 ',
    sell: 'Sell',
  },
  {
    product: 'Maize (SMAZ)',
    quantity: '1832',
    price: '8294.01',
    sell: 'Sell',
  },
  {
    product: 'Sorghum (SSGM) ',
    quantity: '29102',
    price: '8192.00',
    sell: 'Sell',
  },
  {
    product: 'Fair Trade ETC (FETC) ',
    quantity: '3212',
    price: '1736.92',
    sell: 'Sell',
  },
  {
    product: 'Fair Trade ETC (FETC) ',
    quantity: '3212',
    price: '1736.92',
    sell: 'Sell',
  },
];

const OfferPriceTable = () => {
  return (
    <div className='overflow-x-auto'>
      {/* Table Header */}
      <table className='min-w-full border-collapse bg-white'>
        <thead>
          <tr className='border-b-3 border-[#F2F4F6] text-[#778CA2] text-[12px] font-medium'>
            <th className='px-4 py-3 border-b-2 border-[#F2F4F6] text-left'>
              Products
            </th>
            <th className='px-4 py-3 border-b-2 border-[#F2F4F6] text-center '>
              Quantity
            </th>
            <th className='px-4 py-3 border-b-2 border-[#F2F4F6] text-left'>
              Offer Price
            </th>
            <th className='px-4 py-3 border-b-2 border-[#F2F4F6] text-left'></th>
          </tr>
        </thead>
      </table>
      {/* Scrollable Body */}
      <div className='max-h-[250px] overflow-y-auto'>
        <table className='min-w-full border-collapse bg-white'>
          <tbody>
            {BidPrice.map((price, index) => (
              <tr
                key={index}
                className='text-[#1E1E1E] text-[14px] font-medium hover:bg-[#F8FAFB] text-left'
              >
                <td className='px-4 py-4 border-b-2 border-[#F2F4F6]'>
                  {price.product}
                </td>
                <td className='px-4 py-4 border-b-2 border-[#F2F4F6]'>
                  {price.quantity}
                </td>
                <td className='px-4 py-4 border-b-2 border-[#F2F4F6] text-[#E55541]'>
                  {price.price}
                </td>
                <td className='px-4 py-4 border-b-2 border-[#F2F4F6] text-[#E55541] cursor-pointer'>
                  <div className='border border-[#E55541] rounded-md py-1 px-2.5 text-center'>
                    {price.sell}
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

export default OfferPriceTable;
