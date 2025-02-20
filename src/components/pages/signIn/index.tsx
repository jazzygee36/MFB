import { useNavigate } from 'react-router-dom';
import HomeButton from '../../common/homeButton';
import HomeInput from '../../common/homeInput';
import MainLogo from '../../common/mainLogo';
import { useState } from 'react';
import { z } from 'zod';
import { signInSchema } from '../../utils/validation';
import ChatBoxContainer from '../../common/chatBoxContainer';
import axios from 'axios';
import ErrorMessage from '../../common/errorMessage';

type FormData = z.infer<typeof signInSchema>;

const SignIn = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    password: '',
    email: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [apiError, setApiError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false); // Added loading state

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError(null);
    setLoading(true); // Start loading

    const result = signInSchema.safeParse(formData);
    if (!result.success) {
      const validationErrors = result.error.format();
      setErrors({
        email: validationErrors.email?._errors[0] || '',
        password: validationErrors.password?._errors[0] || '',
      });
      setLoading(false); // Stop loading if validation fails
      return;
    }

    try {
      const { email, password } = formData;
      const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/login`, {
        email,
        password,
      });

      if (res.data.message === 'Login successfully') {
        localStorage.setItem('token', res.data.token);
        navigate('/dashboard');
      } else {
        setApiError('Login failed. Please try again.');
      }
    } catch (error: any) {
      setApiError(
        error.response?.data?.message ||
          'Something went wrong. Please try again.'
      );
    } finally {
      setLoading(false); // Stop loading after API response
    }
  };

  const handleBack = () => {
    navigate('/welcome');
  };

  return (
    <>
      <div className='flex flex-col justify-center'>
        <div className='flex justify-center my-7'>
          <MainLogo />
        </div>

        {apiError && (
          <ErrorMessage
            title={apiError}
            onClose={() => {
              setApiError(null);
            }}
          />
        )}

        <div className='w-[95%] md:w-[555px] m-auto bg-white p-5 md:p-11 rounded-md text-[#1E1E1E] flex flex-col items-center'>
          <div className='mb-[40px]'>
            <h1 className='text-center text-[30px] font-[400] font-roboto text-[#1B1E24]'>
              Sign in to ComX
            </h1>
            <p className='text-center text-[#252631] text-[14px] font-[400]'>
              Enter your login credentials below.
            </p>
          </div>
          <form onSubmit={handleSignIn} className='w-full'>
            <div>
              <HomeInput
                type='email'
                placeholder='Enter your Email'
                label='Your Email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                border={errors.email ? 'border-[#EF4444]' : 'border-[#E8ECEF]'}
              />
              {errors.email && (
                <p className='text-[#EF4444] text-[10px] font-medium'>
                  {errors.email}
                </p>
              )}
            </div>
            <div className='my-5 w-full'>
              <HomeInput
                type='password'
                placeholder='Enter your Password'
                label='Your Password'
                name='password'
                value={formData.password}
                onChange={handleChange}
                border={
                  errors.password ? 'border-[#EF4444]' : 'border-[#E8ECEF]'
                }
              />
              {errors.password && (
                <p className='text-[#EF4444] text-[10px] font-medium'>
                  {errors.password}
                </p>
              )}
            </div>
            <div className='flex items-center justify-between w-full mb-5'>
              <div className='flex items-center gap-1 cursor-pointer'>
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
                title={loading ? 'Signing in...' : 'Sign in'}
                type='submit'
                bg={'#52965E'}
                color={'#ffffff'}
                disabled={loading} // Disable button while loading
              />
            </div>
          </form>
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
      <ChatBoxContainer />
    </>
  );
};

export default SignIn;
