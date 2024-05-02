import { Form, TimePicker } from "antd";
import { Controller } from "react-hook-form";
type TDatePicker = {
  name: string;
  label: string;
};
const PHTimePicker = ({ name, label }: TDatePicker) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <TimePicker style={{ width: "100%" }} onChange={field.onChange} />

          {error && <small style={{ color: "red" }}>{error.message}</small>}
        </Form.Item>
      )}
    />
  );
};

export default PHTimePicker;
