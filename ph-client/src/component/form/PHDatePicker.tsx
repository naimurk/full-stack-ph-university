import { DatePicker, Form } from "antd";
import { Controller } from "react-hook-form";
type TDatePicker = {
  name: string;
  label: string;
};
const PHDatePicker = ({ name, label }: TDatePicker) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <DatePicker style={{ width: "100%" }} onChange={field.onChange} />
          {error && <small style={{ color: "red" }}>{error.message}</small>}
        </Form.Item>
      )}
    />
  );
};

export default PHDatePicker;
