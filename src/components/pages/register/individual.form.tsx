import HomeButton from '../../common/homeButton';
import HomeInput from '../../common/homeInput';
import { useState, FC } from 'react';
import { z } from 'zod';
import {
  individualSchema,
  step1Schema,
  step2Schema,
} from '../../utils/validation';
import SelectInput from '../../common/selectInput';

type FormData = z.infer<typeof individualSchema>;

interface IndividualFormProps {
  completeRegistration: boolean;
  setCompleteRegistration: (value: boolean) => void;
  setFormHeader: (value: boolean) => void;
  setProgress: (value: number) => void;
  step: number;
  setStep: (value: number) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const IndividualForm: FC<IndividualFormProps> = ({
  setCompleteRegistration,
  setFormHeader,

  step,

  nextStep,
  prevStep,
}) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    email: '',
    phoneNumber: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault;
  //   const result = individualSchema.safeParse(formData);
  // };

  const handleNextStep = async () => {
    let result;
    if (step === 1) {
      result = step1Schema.safeParse(formData);
    } else if (step === 2) {
      result = step2Schema.safeParse(formData);
    } else {
      // For other steps, use fullSchema or skip validation as needed.
      result = { success: true };
    }

    if (!result.success) {
      const validationErrors = result.error?.format() || {};
      setErrors((prevErrors) => ({
        ...prevErrors,
        ...(step === 1 && {
          firstName: (validationErrors as any).firstName?._errors[0] || '',
          lastName: (validationErrors as any).lastName?._errors[0] || '',
          email: (validationErrors as any).email?._errors[0] || '',
        }),
        ...(step === 2 && {
          password: (validationErrors as any).password?._errors[0] || '',
          confirmPassword:
            (validationErrors as any).confirmPassword?._errors[0] || '',
          phoneNumber: (validationErrors as any).phoneNumber?._errors[0] || '',
        }),
      }));
      return; // Exit if validation fails
    }

    nextStep();
  };

  return (
    <div>
      {step === 1 && (
        <>
          <div className='flex items-center gap-5'>
            <div>
              <HomeInput
                type={'text'}
                placeholder={'Enter your First Name'}
                label='Your First Name'
                name='firstName'
                value={formData.firstName}
                onChange={handleChange}
                border={
                  errors.firstName ? 'border-[#EF4444]' : 'border-[#E8ECEF]'
                }
              />
              {errors.firstName && (
                <p className='text-[#EF4444] text-[10px] font-medium'>
                  {errors.firstName}
                </p>
              )}
            </div>
            <div>
              <HomeInput
                type={'text'}
                placeholder={'Enter your Last Name'}
                label='Your Last Name'
                name='lastName'
                value={formData.lastName}
                onChange={handleChange}
                border={
                  errors.lastName ? 'border-[#EF4444]' : 'border-[#E8ECEF]'
                }
              />
              {errors.lastName && (
                <p className='text-[#EF4444] text-[10px] font-medium'>
                  {errors.lastName}
                </p>
              )}
            </div>
          </div>
          <div className='mt-5'>
            <HomeInput
              type={'text'}
              placeholder={'Enter your Email'}
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
        </>
      )}

      {step === 2 && (
        <>
          <div>
            <HomeInput
              type={'password'}
              placeholder={'Enter your Password'}
              label='Password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              border={errors.password ? 'border-[#EF4444]' : 'border-[#E8ECEF]'}
            />
            {errors.password && (
              <p className='text-[#EF4444] text-[10px] font-medium'>
                {errors.password}
              </p>
            )}
          </div>
          <div className='my-5'>
            <HomeInput
              type={'password'}
              placeholder={'Confirm Password'}
              label='Confirm Password'
              name='confirmPassword'
              value={formData.confirmPassword}
              onChange={handleChange}
              border={
                errors.confirmPassword ? 'border-[#EF4444]' : 'border-[#E8ECEF]'
              }
            />
            {errors.confirmPassword && (
              <p className='text-[#EF4444] text-[10px] font-medium'>
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <h3 className='text-[#1E1E1E] text-[14px] font-roboto'>
            Phone Number
          </h3>
          <div className='flex items-center gap-3'>
            <div className='w-[30%]'>
              <SelectInput
                // label={'Phone Number'}
                option={[
                  { value: 'option1', label: 'Option' },
                  { value: 'option2', label: 'Option 2' },
                  { value: 'option3', label: 'Option 3' },
                ]}
                name={''}
                value={''}
                onChange={handleChange}
                // border={
                //   errors.phoneNumber ? 'border-[#EF4444]' : 'border-[#E8ECEF]'
                // }
              />
              {errors.phoneNumber && (
                <p className='text-[#EF4444] text-[10px] font-medium'>
                  {errors.phoneNumber}
                </p>
              )}
            </div>
            <div className='w-full'>
              <HomeInput
                type={'text'}
                placeholder={'Enter your Phone Number'}
                label=''
                name='phoneNumber'
                value={formData.phoneNumber}
                onChange={handleChange}
                border={
                  errors.phoneNumber ? 'border-[#EF4444]' : 'border-[#E8ECEF]'
                }
                onKeyPress={(event: React.KeyboardEvent<HTMLInputElement>) => {
                  if (!/[0-9 +]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
              {errors.phoneNumber && (
                <p className='text-[#EF4444] text-[10px] font-medium'>
                  {errors.phoneNumber}
                </p>
              )}
            </div>
          </div>
        </>
      )}

      {step === 3 && (
        <div>
          <p className='text-[14px] text-[#1E1E1E] mb-6 '>
            Enter the 4-digit code that was sent to +23472639482 and
            name@mymail.com
          </p>
          <HomeInput type='text' placeholder='Enter code' />
          <p className='mt-2.5 text-[#98A9BCCC] text-[12px] text-center'>
            Resend Code
          </p>
        </div>
      )}

      <div className='flex justify-between mt-6'>
        {step < 3 && (
          <HomeButton
            title={step === 2 ? 'VERIFY ACCOUNT' : 'NEXT STEP'}
            bg=''
            onClick={handleNextStep}
            color={'#D71E0E'}
          />
        )}
        {step === 3 && (
          <div className='flex items-center justify-between w-full mt-44'>
            <h2
              onClick={() => {
                setFormHeader(false), prevStep();
              }}
              className=' text-[14px] font-medium cursor-pointer'
            >
              BACK
            </h2>
            <h2
              onClick={() => setCompleteRegistration(true)}
              className='text-[#D71E0E] text-[14px] font-medium cursor-pointer'
            >
              FINISH
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default IndividualForm;
