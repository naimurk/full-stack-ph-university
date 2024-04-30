import { Form, Select } from "antd";
import { Controller } from "react-hook-form";
type TPHSelector = {
  name: string;
  label: string;
  options:
    | Array<{ value: string; label: string; disabled?: boolean }>
    | undefined;
  disabled?: boolean;
  mode?: "multiple" | undefined;
};

const PHSelect = ({ name, label, options, disabled, mode }: TPHSelector) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <Select
            style={{ width: "100%" }}
            {...field}
            onChange={field.onChange}
            options={options}
            disabled={disabled}
            mode={mode === "multiple" ? "multiple" : undefined}
          />
          {error && <small style={{ color: "red" }}>{error.message}</small>}
        </Form.Item>
      )}
    />
  );
};

export default PHSelect;
