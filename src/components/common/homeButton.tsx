import { ButtonProps } from '../utils/interface';

const HomeButton = ({
  title,
  onClick,
  bg,
  color,
  type,
  disabled,
}: ButtonProps) => {
  return (
    <div className='w-full'>
      <button
        style={{ background: `${bg}`, color: `${color}` }}
        className={`h-[46px] w-full outline-none px-4 text-[14px]  font-medium font-roboto capitalize cursor-pointer`}
        onClick={onClick}
        type={type}
        disabled={disabled}
      >
        {title}
      </button>
    </div>
  );
};

export default HomeButton;
