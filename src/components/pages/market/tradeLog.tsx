const BidPrice = [
  {
    security: 'Soybeans (SSBS) ',
    board: 'X-Traded',
    matchedPrice: '1736.92',
    orderType: 'Buy',
    qty: '9265',
    date: ' 17 Oct, 2020',
    time: '07:38',
  },
  {
    security: 'Paddy Rice (SPRL) ',
    board: 'X-Traded',
    matchedPrice: '3627.00 ',
    orderType: 'Buy',
    qty: '9265',
    date: ' 8 Sep, 2020',
    time: '02:28',
  },
  {
    security: 'Maize (SMAZ)',
    board: 'OTC',
    matchedPrice: '8294.01',
    orderType: 'Sell',
    qty: '9265',
    date: ' 24 May, 2020',
    time: '06:42',
  },
  {
    security: 'Sorghum (SSGM) ',
    board: 'FI',
    matchedPrice: '8192.00',
    orderType: 'Sell',
    qty: '9265',
    date: ' 8 Sep, 2020',
    time: '02:28',
  },
  {
    security: 'Fair Trade ETC (FETC) ',
    board: '3212',
    matchedPrice: '1736.92',
    orderType: 'Buy',
    qty: '9265',
    date: ' 24 May, 2020',
    time: '06:42',
  },
  {
    security: 'Fair Trade ETC (FETC) ',
    board: '3212',
    matchedPrice: '1736.92',
    orderType: 'Buy',
    qty: '9265',
    date: ' 24 May, 2020',
    time: '06:42',
  },
];
const columnWidths = {
  security: '20%',
  board: '10%',
  orderType: '15%',
  matchedPrice: '15%',
  qty: '15%',
  date: '15%',
  time: '10%',
};

const TradeLogTable = () => {
  return (
    <>
      <div className='border-b-2 border-[#F2F4F6] text-[#778CA2] text-[12px] font-medium bg-white w-full'>
        <h1 className='px-4 py-3 text-left'>TRADE LOG</h1>
      </div>
      <div className='overflow-x-auto'>
        {/* Header Table */}
        <table className='min-w-full border-collapse bg-white'>
          <thead>
            <tr className='border-b-2 border-[#F2F4F6] text-[#778CA2] text-[12px] font-medium'>
              <th
                style={{ width: columnWidths.security }}
                className='px-4 py-3 border-b-2 border-[#F2F4F6] text-left'
              >
                Security
              </th>
              <th
                style={{ width: columnWidths.board }}
                className='px-4 py-3 border-b-2 border-[#F2F4F6] text-left'
              >
                Board
              </th>
              <th
                style={{ width: columnWidths.orderType }}
                className='px-4 py-3 border-b-2 border-[#F2F4F6] text-left'
              >
                Order Type
              </th>
              <th
                style={{ width: columnWidths.matchedPrice }}
                className='px-4 py-3 border-b-2 border-[#F2F4F6] text-left'
              >
                Matched Price
              </th>
              <th
                style={{ width: columnWidths.qty }}
                className='px-4 py-3 border-b-2 border-[#F2F4F6] text-left'
              >
                Quantity
              </th>
              <th
                style={{ width: columnWidths.date }}
                className='px-4 py-3 border-b-2 border-[#F2F4F6] text-left'
              >
                Date
              </th>
              <th
                style={{ width: columnWidths.time }}
                className='px-4 py-3 border-b-2 border-[#F2F4F6] text-left'
              >
                Time
              </th>
            </tr>
          </thead>
        </table>
        {/* Scrollable Body Table */}
        <div className='max-h-[250px] overflow-y-auto'>
          <table className='min-w-full border-collapse bg-white'>
            <tbody>
              {BidPrice.map((trade, index) => (
                <tr
                  key={index}
                  className='text-[#1E1E1E] text-[14px] font-medium hover:bg-[#F8FAFB]'
                >
                  <td
                    style={{ width: columnWidths.security }}
                    className='px-4 py-4 border-b-2 border-[#F2F4F6]'
                  >
                    {trade.security}
                  </td>
                  <td
                    style={{ width: columnWidths.board }}
                    className='px-4 py-4 border-b-2 border-[#F2F4F6] text-left'
                  >
                    {trade.board}
                  </td>
                  <td
                    style={{ width: columnWidths.orderType }}
                    className='px-4 py-4 border-b-2 border-[#F2F4F6]'
                  >
                    {trade.orderType}
                  </td>
                  <td
                    style={{ width: columnWidths.matchedPrice }}
                    className='px-4 py-4 border-b-2 border-[#F2F4F6]'
                  >
                    {trade.matchedPrice}
                  </td>
                  <td
                    style={{ width: columnWidths.qty }}
                    className='px-4 py-4 border-b-2 border-[#F2F4F6]'
                  >
                    {trade.qty}
                  </td>
                  <td
                    style={{ width: columnWidths.date }}
                    className='px-4 py-4 border-b-2 border-[#F2F4F6]'
                  >
                    {trade.date}
                  </td>
                  <td
                    style={{ width: columnWidths.time }}
                    className='px-4 py-4 border-b-2 border-[#F2F4F6]'
                  >
                    {trade.time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TradeLogTable;
