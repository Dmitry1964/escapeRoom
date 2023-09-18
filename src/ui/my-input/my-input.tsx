type MyInputProps = {
  type: string;
  name: string;
  id: string;
  placeholder?: string;
  required?: boolean;
  checked?: boolean;
  value: string;
  onChange?: (evt: { target: { value: string } }) => void;
};

const MyInput = (props: MyInputProps): JSX.Element => <input {...props} />;

export default MyInput;
