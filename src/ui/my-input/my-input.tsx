
type MyInputProps = {
  type: string;
  name: string;
  id: string;
  placeholder: string;
  required: boolean;
  value: string;
  onChange: (evt: { target: { value: string } }) => void;
}

const MyInput = (props : MyInputProps) : JSX.Element => {
  const a=2;
  return (
    <input {...props}/>
  );
};

export default MyInput;
