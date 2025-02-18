import { useNavigate } from 'react-router-dom';
import HomeButton from '../../common/homeButton';
import MainLogo from '../../common/mainLogo';

const LandingPage = () => {
  const navigate = useNavigate();

  // Reusable card component
  const AuthCard = ({
    onButtonClick,
    heading,
    description,
    buttonTitle = 'Sign in',
  }: {
    onButtonClick: () => void;
    heading: string;
    description: string;
    buttonTitle?: string;
  }) => (
    <div className='w-[555px] m-auto my-10 bg-white p-11 rounded-md text-[#1E1E1E] flex flex-col items-center'>
      <h1 className='text-center text-[30px] font-[400] font-roboto text-[#1B1E24] font-roboto'>
        {heading}
      </h1>
      <p className='text-center  text-[#252631] text-[14px] font-[400]'>
        {description}
      </p>
      <div className='mt-8 w-full'>
        <HomeButton
          title={buttonTitle}
          onClick={onButtonClick}
          // If heading is "Create an account", use black, otherwise use green
          bg={heading === 'Create an Account' ? '#140706' : '#52965E'}
          color='#ffffff'
        />
      </div>
    </div>
  );

  return (
    <>
      <div className='flex flex-col justify-center'>
        <div className='flex justify-center my-7'>
          <MainLogo />
        </div>
        <AuthCard
          heading='Sign in to ComX'
          description='Welcome to ComX'
          buttonTitle='Sign in'
          onButtonClick={() => navigate('/sign-in')}
        />
      </div>

      <div className='flex flex-col justify-center'>
        <AuthCard
          heading='Create an Account'
          description='Join the Family'
          buttonTitle='Register'
          onButtonClick={() => navigate('/register')}
        />
      </div>
    </>
  );
};

export default LandingPage;
