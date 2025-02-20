import { useNavigate } from 'react-router-dom';
import HomeInput from '../../common/homeInput';
import MainLogo from '../../common/mainLogo';
import { resetSchema } from '../../utils/validation';
import { z } from 'zod';
import { useState } from 'react';
import axios from 'axios';
import ErrorMessage from '../../common/errorMessage';

type FormData = z.infer<typeof resetSchema>;

const PasswordReset = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    email: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [apiError, setApiError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleResetEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = resetSchema.safeParse(formData);

    if (!result.success) {
      const validationErrors = result.error.format();
      setErrors({
        email: validationErrors.email?._errors[0] || '',
      });
      return; // Exit if validation fails
    }
    try {
      const { email } = formData;
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/request-reset`,
        {
          email,
        }
      );

      if (res.data.message === 'Reset code sent to email') {
        localStorage.setItem('resetEmail', formData.email);
        navigate('/otp-verification');
      } else {
        setApiError('Login failed. Please try again.');
      }
    } catch (error: any) {
      setApiError(
        error.response?.data?.message ||
          'Something went wrong. Please try again.'
      );
    }
  };
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
        <div className='w-full'>
          <HomeInput
            type={'email'}
            placeholder={'Enter your Email'}
            label='Enter the Email Address you registered with'
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
        <p className='text-center text-[#98A9BCCC] text-[12px] font-[400] mt-[15px]'>
          Note that you’ll be sent an OTP to the email address provided
        </p>

        <div className='w-full'>
          {apiError && (
            <ErrorMessage
              title={apiError}
              onClose={() => {
                setApiError(null);
              }}
            />
          )}
        </div>
        <div className='flex items-center justify-between w-full mt-44'>
          <h2
            onClick={() => navigate('/sign-in')}
            className=' text-[14px] font-medium cursor-pointer'
          >
            BACK
          </h2>
          <h2
            onClick={handleResetEmail}
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
