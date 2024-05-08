import { Button, Row } from "antd";
import PHForm from "../../../component/form/PHForm";
import PHinput from "../../../component/form/PHinput";
import { toast } from "sonner";
import { FieldValues } from "react-hook-form";
import { useChangedPasswordMutation } from "../../../redux/feature/auth/authApi";
import { TResponse } from "../../../types";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../redux/hook";
import { logout } from "../../../redux/feature/auth/authSlice";

const ChangesPassword = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [changePassword, { isError, error }] = useChangedPasswordMutation();
  const onSubmit = async (formData: FieldValues) => {
    toast.loading("loading...", { id: 1 });

    const res = (await changePassword(formData)) as TResponse<any>;
    console.log(res);
    if (res?.error?.data?.message && res?.error) {
      //   console.log(res?.error?.data?.message);
      toast.loading(res?.error?.data?.message, { id: 1 });
    } else {
      dispatch(logout());
      navigate("/login");
    }

    // console.log(formData);
  };
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Change Password</h2>

      <Row justify={"center"} style={{ marginTop: "15px" }} align={"middle"}>
        <PHForm onSubmit={onSubmit}>
          <div>
            <PHinput
              label="Old password"
              name={"oldPassword"}
              type={"text"}
            ></PHinput>
          </div>
          <div>
            <PHinput
              label="New password"
              name={"newPassword"}
              type={"password"}
            ></PHinput>
          </div>
          {/* <button type="submit">Login</button> */}
          <Button htmlType="submit" type="primary">
            Login
          </Button>
        </PHForm>
      </Row>
    </div>
  );
};

export default ChangesPassword;
