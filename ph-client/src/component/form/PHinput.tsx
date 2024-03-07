import { useFormContext } from "react-hook-form";

const PHinput = ({ name, type }) => {
  const { register } = useFormContext();
  return (
    <div>
      <input type={type} id={name} {...register(name)} />
    </div>
  );
};

export default PHinput;
