import { Form, Select } from "antd";
import { useEffect } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";
type TPHSelector = {
  name: string;
  label: string;
  options:
    | Array<{ value: string; label: string; disabled?: boolean }>
    | undefined;
  disabled?: boolean;
  mode?: "multiple" | undefined;
  onValueChange: React.Dispatch<React.SetStateAction<string>>;
};

const PHSelectWithWatch = ({
  name,
  label,
  options,
  disabled,
  mode,
  onValueChange,
}: TPHSelector) => {
  const { control } = useFormContext();
  const inputValues = useWatch({ control, name });

  useEffect(() => {
    if (inputValues) {
      onValueChange(inputValues);
    }
  }, [inputValues]);
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

export default PHSelectWithWatch;
