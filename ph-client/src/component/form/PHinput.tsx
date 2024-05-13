import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

const PHinput = ({
  name,
  type,
  label,
}: {
  name: string;
  type: string;
  label: string;
}) => {

  return (
    <div>
      {/* <input type={type} id={name} {...register(name)} /> */}
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          // <Input {...field} type={type} placeholder="Basic usage" />
          <Form.Item label={label}>
            <Input {...field} type={type} placeholder="Basic usage" />
            {error && <p style={{color: "red"}}>{error?.message}</p>}
          </Form.Item>
        )}
      />
    </div>
  );
};

export default PHinput;
