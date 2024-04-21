import { Form, Select } from "antd";
import { Controller } from "react-hook-form";
type TPHSelector = {
  name: string;
  label: string;
  options: Array<{ value: string; label: string; disabled?: boolean }> | undefined;
  disabled: boolean
};


const PHSelect = ({ name, label, options , disabled}: TPHSelector) => {
 
  return (
    <Controller
      name={name}
      
      render={({ field , fieldState: {error} }) => (
        <Form.Item label={label}>
          <Select
            style={{ width: "100%" }}
            {...field}
            onChange={field.onChange}
            options={options}
            disabled={disabled}
          />
          {error && <small style={{color: "red"}}>{error.message}</small>}
        </Form.Item>
      )}
    />
  );
};

export default PHSelect;
