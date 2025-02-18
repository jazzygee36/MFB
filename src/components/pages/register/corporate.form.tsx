import { useState, useEffect, FC } from 'react';
import HomeInput from '../../common/homeInput';
import SelectInput from '../../common/selectInput';
import HomeButton from '../../common/homeButton';

interface CorporateFormProps {
  completeRegistration: boolean;
  setCompleteRegistration: (value: boolean) => void;
  setFormHeader: (value: boolean) => void;
  setProgress: (value: number) => void;
  step: number;
  setStep: (value: number) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const CorporateForm: FC<CorporateFormProps> = ({
  completeRegistration,
  setCompleteRegistration,
  setFormHeader,

  step,

  nextStep,
  prevStep,
}) => {
  const [formData, setFormData] = useState({
    companyName: '',
    businessType: '',
    incorporationDate: '',
    password: '',
    confirmPassword: '',
    companyEmail: '',
  });

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
    console.log('Form Submitted:', formData);
  };

  useEffect(() => {
    if (step === 3) {
      setFormHeader(true);
    }
  }, [step, setFormHeader]);

  useEffect(() => {
    console.log('completeRegistration updated:', completeRegistration);
  }, [completeRegistration]);
  return (
    <div>
      {!completeRegistration && (
        <div>
          {step === 1 && (
            <div>
              <HomeInput
                type='text'
                name='companyName'
                placeholder='Company Name'
                label='Company Name'
                value={formData.companyName}
                onChange={handleChange}
              />
              <div className='flex items-center gap-3 mt-[22px]'>
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
                />
                <HomeInput
                  type='date'
                  name='incorporationDate'
                  placeholder='Select Date'
                  label='Date of Incorporation'
                  value={formData.incorporationDate}
                  onChange={handleChange}
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <HomeInput
                type='text'
                name='Companymail'
                placeholder='Company email'
                label='Company email'
                value={formData.companyEmail}
                onChange={handleChange}
              />
              <div className='my-5'>
                <HomeInput
                  type='password'
                  name='password'
                  placeholder='Enter your password'
                  label='password'
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <HomeInput
                type='password'
                name='confirmPassword'
                placeholder='Confirm your password'
                label='Confirm password'
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          )}

          {step === 3 && (
            <div>
              <p className='text-[14px] text-[#1E1E1E] mb-6 text-center'>
                Enter the 4-digit code that was sent to name@mymail.com
              </p>
              <HomeInput type='text' placeholder='Enter code' />
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
                onClick={nextStep}
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
      )}
    </div>
  );
};

export default CorporateForm;
