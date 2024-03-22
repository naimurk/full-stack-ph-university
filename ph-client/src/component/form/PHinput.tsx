import { Form, Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

const PHinput = ({
  name,
  type,
  label,
}: {
  name: string;
  type: string;
  label: string;
}) => {
  const { register } = useFormContext();

  return (
    <div>
      {/* <input type={type} id={name} {...register(name)} /> */}
      <Controller
        name={name}
        render={({ field }) => (
          // <Input {...field} type={type} placeholder="Basic usage" />
          <Form.Item label={label}>
            <Input {...field} type={type} placeholder="Basic usage" />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default PHinput;
