export interface InputProps {
  type: string;
  placeholder: string;
  label?: string;
  name?: string;
  value?: string;
  border?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;
}
export interface SelectProps {
  label?: string;
  option: { value: string; label: string }[];
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}
export interface ButtonProps {
  title: string;
  onClick: () => void;
  bg: string;
  color: string;
}
