import { useNavigate } from 'react-router-dom';
import HomeButton from '../../common/homeButton';
import HomeInput from '../../common/homeInput';
import MainLogo from '../../common/mainLogo';

const SignIn = () => {
  const navigate = useNavigate();
  const handleSign = () => {
    console.log('shpow');
  };

  const handleBack = () => {
    navigate('/welcome');
  };
  return (
    <div className='flex flex-col justify-center'>
      <div className='flex justify-center my-7'>
        <MainLogo />
      </div>
      <div className='w-[95%] md:w-[555px] m-auto  bg-white p-11 rounded-md text-[#1E1E1E] flex flex-col items-center'>
        <div className='mb-[40px]'>
          <h1 className='text-center text-[30px] font-[400] font-roboto text-[#1B1E24]'>
            Sign in to ComX
          </h1>
          <p className='text-center text-[#252631] text-[14px] font-[400]'>
            Enter your login credentials below.
          </p>
        </div>
        <HomeInput
          type={'email'}
          placeholder={'Enter your Email'}
          label='Your Email'
        />
        <div className='my-5 w-full'>
          <HomeInput
            type={'password'}
            placeholder={'Enter your Password'}
            label='Your Password'
          />
        </div>
        <div className='flex items-center justify-between w-full mb-5'>
          <div className='flex items-center gap-1 cursor-pointer '>
            <input type='checkbox' />
            <h3 className='text-[#140706] text-[14px] font-[400]'>
              Stay Signed in
            </h3>
          </div>
          <div>
            <h2
              className='text-[#D71E0E] text-[14px] font-[400] cursor-pointer'
              onClick={() => navigate('/password-reset')}
            >
              Forget password?
            </h2>
          </div>
        </div>
        <div className='w-full'>
          <HomeButton
            title={'Sign in'}
            onClick={handleSign}
            bg={'#52965E'}
            color={'#ffffff'}
          />
        </div>
        <div className='w-full mt-5'>
          <HomeButton
            title={'Back'}
            onClick={handleBack}
            bg={'#F8FAFB'}
            color={'#1E1E1E'}
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
