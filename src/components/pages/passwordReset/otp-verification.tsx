import { useNavigate } from 'react-router-dom';
import HomeInput from '../../common/homeInput';
import MainLogo from '../../common/mainLogo';
import React, { useState } from 'react';
import { z } from 'zod';
import { otpVerifySchema } from '../../utils/validation';
import axios from 'axios';
import ErrorMessage from '../../common/errorMessage';

type FormData = z.infer<typeof otpVerifySchema>;

const OtpVerification = () => {
  const navigate = useNavigate();
  const storedEmail = localStorage.getItem('resetEmail') || '';

  const [formData, setFormData] = useState<FormData>({
    verificationCode: '',
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

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = otpVerifySchema.safeParse(formData);

    if (!result.success) {
      const validationErrors = result.error.format();
      setErrors({
        code: validationErrors.verificationCode?._errors[0] || '',
      });
      return;
    }
    try {
      const { verificationCode } = formData;
      const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/verify`, {
        verificationCode,
        email: storedEmail,
      });

      if (res.data.message === 'Reset code sent to email') {
        navigate('/sign-in');
      } else {
        setApiError('Verification failed. Please try again.');
      }
    } catch (error: any) {
      setApiError(
        error.response?.data?.message ||
          'Something went wrong. Please try again.'
      );
    }
  };

  const handleResendCode = async () => {
    try {
      // Retrieve the email from localStorage
      const email = storedEmail;
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/request-reset`,
        { email }
      );

      if (res.data.message === 'Reset code sent to email') {
        // Optionally update the stored email if needed
        localStorage.setItem('resetEmail', email);
        navigate('/otp-verification');
      } else {
        setApiError('Resend failed. Please try again.');
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
      <div className='w-[95%] md:w-[555px] m-auto bg-white p-5 md:p-11 rounded-md text-[#1E1E1E] flex flex-col items-center'>
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
            type={'text'}
            placeholder={'Enter your Code'}
            label={`Enter the 4-digit code that was sent to ${storedEmail}`}
            name='verificationCode'
            value={formData.verificationCode}
            onChange={handleChange}
            border={errors.code ? 'border-[#EF4444]' : 'border-[#E8ECEF]'}
            onKeyPress={(event: React.KeyboardEvent<HTMLInputElement>) => {
              if (!/[0-9 +]/.test(event.key)) {
                event.preventDefault();
              }
            }}
          />
          {errors.code && (
            <p className='text-[#EF4444] text-[10px] font-medium'>
              {errors.code}
            </p>
          )}
        </div>
        <p
          className='hover:underline text-center text-[#98A9BCCC] text-[12px] font-[400] mt-[15px] cursor-pointer'
          onClick={handleResendCode}
        >
          Resend Code
        </p>
        <div className='w-full my-12'>
          {apiError && (
            <ErrorMessage
              title={apiError}
              onClose={() => {
                setApiError(null);
              }}
            />
          )}
        </div>
        <div className='flex items-center justify-between w-full '>
          <h2
            onClick={() => navigate('/sign-in')}
            className='text-[14px] font-medium cursor-pointer'
          >
            BACK
          </h2>
          <h2
            onClick={handleResetPassword}
            className='text-[#D71E0E] text-[14px] font-medium cursor-pointer'
          >
            FINISH
          </h2>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
