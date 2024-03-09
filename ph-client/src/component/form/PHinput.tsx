import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

const PHinput = ({ name, type }) => {
  const { register } = useFormContext();
  return (
    <div>
      {/* <input type={type} id={name} {...register(name)} /> */}
      <Controller
        name={name}
        render={({ field }) => (
          <Input {...field} type={type} placeholder="Basic usage" />
        )}
      />
    </div>
  );
};

export default PHinput;
