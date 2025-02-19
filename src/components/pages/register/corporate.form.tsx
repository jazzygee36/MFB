import { useState, useEffect, FC } from 'react';
import HomeInput from '../../common/homeInput';
import SelectInput from '../../common/selectInput';
import HomeButton from '../../common/homeButton';
import { CorporateFormProps } from '../../utils/interface';
import { z } from 'zod';
import {
  corporateSchema,
  corporateStep1Schema,
  corporateStep2Schema,
  corporateStep3Schema,
} from '../../utils/validation';

interface ValidationErrors {
  companyName?: { _errors: string[] };
  businessType?: { _errors: string[] };
  incorporationDate?: { _errors: string[] };
  password?: { _errors: string[] };
  confirmPassword?: { _errors: string[] };
  companyEmail?: { _errors: string[] };
  code?: { _errors: number[] };
}

type FormData = z.infer<typeof corporateSchema>;

const CorporateForm: FC<CorporateFormProps> = ({
  completeRegistration,
  setCompleteRegistration,
  setFormHeader,
  step,
  nextStep,
  prevStep,
}) => {
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    businessType: '',
    incorporationDate: '',
    password: '',
    confirmPassword: '',
    companyEmail: '',
    code: '',
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

  const handleSubmit = () => {
    let result;
    if (step === 1) {
      result = corporateStep1Schema.safeParse(formData);
    } else if (step === 2) {
      result = corporateStep2Schema.safeParse(formData);
      if (result.success) {
        localStorage.setItem('email', formData.companyEmail);
      }
    } else {
      result = { success: true };
    }

    if (!result.success) {
      const validationErrors = (result.error?.format() ||
        {}) as ValidationErrors;
      setErrors((prevErrors) => ({
        ...prevErrors,
        ...(step === 1 && {
          companyName: validationErrors.companyName?._errors[0] || '',
          businessType: validationErrors.businessType?._errors[0] || '',
          incorporationDate:
            validationErrors.incorporationDate?._errors[0] || '',
        }),
        ...(step === 2 && {
          password: validationErrors.password?._errors[0] || '',
          confirmPassword: validationErrors.confirmPassword?._errors[0] || '',
          companyEmail: validationErrors.companyEmail?._errors[0] || '',
        }),
      }));
      return; // Exit if validation fails
    }

    nextStep();
  };

  useEffect(() => {
    if (step === 3) {
      setFormHeader(true);
    }
  }, [step, setFormHeader]);

  useEffect(() => {
    console.log('completeRegistration updated:', completeRegistration);
  }, [completeRegistration]);

  const handleFinishRegistration = () => {
    // Validate step 3 using corporateStep3Schema
    const result = corporateStep3Schema.safeParse(formData);
    if (!result.success) {
      const validationErrors = result.error?.format() || {};
      setErrors((prevErrors) => ({
        ...prevErrors,
        code: validationErrors.code?._errors[0] || 'Code is required',
      }));
      return; // Do not finish registration if validation fails
    }
    nextStep();
    setCompleteRegistration(true);
  };

  return (
    <div>
      {!completeRegistration && (
        <div>
          {step === 1 && (
            <div>
              <div>
                <HomeInput
                  type='text'
                  name='companyName'
                  placeholder='Company Name'
                  label='Company Name'
                  value={formData.companyName}
                  onChange={handleChange}
                  border={
                    errors.companyName ? 'border-[#EF4444]' : 'border-[#E8ECEF]'
                  }
                />
                {errors.companyName && (
                  <p className='text-[#EF4444] text-[10px] font-medium'>
                    {errors.companyName}
                  </p>
                )}
              </div>
              <div className='flex items-center gap-3 mt-[22px]'>
                <div className='w-full'>
                  <SelectInput
                    label='Type of Business'
                    option={[
                      { value: 'option1', label: 'Option 1' },
                      { value: 'option2', label: 'Option 2' },
                      { value: 'option3', label: 'Option 3' },
                    ]}
                    name='businessType'
                    value={formData.businessType}
                    onChange={handleChange}
                    border={
                      errors.businessType
                        ? 'border-[#EF4444]'
                        : 'border-[#E8ECEF]'
                    }
                  />
                  {errors.businessType && (
                    <p className='text-[#EF4444] text-[10px] font-medium'>
                      {errors.businessType}
                    </p>
                  )}
                </div>
                <div className='w-full'>
                  <HomeInput
                    type='date'
                    name='incorporationDate'
                    placeholder='Select Date'
                    label='Date of Incorporation'
                    value={formData.incorporationDate}
                    onChange={handleChange}
                    border={
                      errors.incorporationDate
                        ? 'border-[#EF4444]'
                        : 'border-[#E8ECEF]'
                    }
                  />
                  {errors.incorporationDate && (
                    <p className='text-[#EF4444] text-[10px] font-medium'>
                      {errors.incorporationDate}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <div>
                <HomeInput
                  type='email'
                  name='companyEmail'
                  placeholder='Company email'
                  label='Company email'
                  value={formData.companyEmail}
                  onChange={handleChange}
                  border={
                    errors.companyEmail
                      ? 'border-[#EF4444]'
                      : 'border-[#E8ECEF]'
                  }
                />
                {errors.companyEmail && (
                  <p className='text-[#EF4444] text-[10px] font-medium'>
                    {errors.companyEmail}
                  </p>
                )}
              </div>
              <div className='my-5'>
                <HomeInput
                  type='password'
                  name='password'
                  placeholder='Enter your password'
                  label='Password'
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
              <div>
                <HomeInput
                  type='password'
                  name='confirmPassword'
                  placeholder='Confirm your password'
                  label='Confirm Password'
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  border={
                    errors.confirmPassword
                      ? 'border-[#EF4444]'
                      : 'border-[#E8ECEF]'
                  }
                />
                {errors.confirmPassword && (
                  <p className='text-[#EF4444] text-[10px] font-medium'>
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <p className='text-[14px] text-[#1E1E1E] mb-6 text-center'>
                Enter the 4-digit code that was sent to{' '}
                {localStorage.getItem('email')}
              </p>
              <div>
                <HomeInput
                  type='text'
                  placeholder='Enter code'
                  name='code'
                  value={formData.code}
                  onChange={handleChange}
                  border={errors.code ? 'border-[#EF4444]' : 'border-[#E8ECEF]'}
                  onKeyPress={(
                    event: React.KeyboardEvent<HTMLInputElement>
                  ) => {
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
              <p className='mt-2.5 text-[#98A9BCCC] text-[12px]'>Resend Code</p>
              <p className='text-[#98A9BCCC] text-[12px]'>
                Verify via Phone Call
              </p>
            </div>
          )}

          <div className='flex justify-between mt-6'>
            {step < 3 && (
              <HomeButton
                title='NEXT STEP'
                bg=''
                onClick={handleSubmit}
                color={'#D71E0E'}
              />
            )}
            {step === 3 && (
              <div className='flex items-center justify-between w-full mt-44'>
                <h2
                  onClick={() => {
                    setFormHeader(false);
                    prevStep();
                  }}
                  className='text-[14px] font-medium cursor-pointer'
                >
                  BACK
                </h2>
                <h2
                  onClick={handleFinishRegistration}
                  className='text-[#D71E0E] text-[14px] font-medium cursor-pointer'
                >
                  FINISH
                </h2>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CorporateForm;
