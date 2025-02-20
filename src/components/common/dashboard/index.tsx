import Footer from '../footer';
import Header from './header';
import ProductView from './productView';
import Sidebar from './sidebar';

interface Props {
  children: React.ReactNode;
}
const MainDashboard = ({ children }: Props) => {
  return (
    <>
      {/* Fixed Header */}
      <div className='fixed top-0 left-0 w-full z-50 '>
        <Header />
      </div>

      <div className='pt-[60px]'>
        {' '}
        {/* Adjust padding to prevent overlap */}
        <div className='flex gap-2'>
          <div className='flex gap-2'>
            <Sidebar />
            <ProductView />
          </div>
          <div className='flex flex-col h-full w-full'>{children}</div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MainDashboard;
