import SuccessImg from '../../../assets/success.svg';
const CompleteRegistration = () => {
  return (
    <div>
      <img src={SuccessImg} alt='success' className='m-auto justify-center' />
      <div className='text-center'>
        <h2 className='text-[#1B1E24] text-[30px] font-[400] font-roboto my-2.5'>
          Registration Complete
        </h2>
        <p className='text-[14px] font-light text-[#252631]'>
          Dear [fName]. Your registration is now complete. You may proceed to
          your dashboard and start trading commodities.
        </p>

        <h4 className='text-[#D71E0E] text-[14px] font-medium mt-[28px] cursor-pointer'>
          GO TO DASHBOARD
        </h4>
      </div>
    </div>
  );
};

export default CompleteRegistration;
