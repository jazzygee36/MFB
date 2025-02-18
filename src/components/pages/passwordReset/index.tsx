import { useNavigate } from 'react-router-dom';
import HomeInput from '../../common/homeInput';
import MainLogo from '../../common/mainLogo';

const PasswordReset = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col justify-center'>
      <div className='flex justify-center my-7'>
        <MainLogo />
      </div>
      <div className='w-[95%] md:w-[555px] m-auto  bg-white p-11 rounded-md text-[#1E1E1E] flex flex-col items-center'>
        <div className='mb-[40px]'>
          <h1 className='text-center text-[30px] font-[400] font-roboto text-[#1B1E24]'>
            Password Reset
          </h1>
          <p className='text-center text-[#252631] text-[14px] font-[400]'>
            Reset your password to continue trading on ComX
          </p>
        </div>
        <HomeInput
          type={'email'}
          placeholder={'Enter your Email'}
          label='Enter the Email Address you registered with'
        />
        <p className='text-center text-[#98A9BCCC] text-[12px] font-[400] mt-[15px]'>
          Note that you’ll be sent an OTP to the email address provided
        </p>
        <div className='flex items-center justify-between w-full mt-44'>
          <h2
            onClick={() => navigate('/')}
            className=' text-[14px] font-medium cursor-pointer'
          >
            BACK
          </h2>
          <h2
            onClick={() => navigate('/otp-verification')}
            className='text-[#D71E0E] text-[14px] font-medium cursor-pointer'
          >
            PROCEED
          </h2>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
