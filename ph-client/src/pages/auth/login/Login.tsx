import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../../../redux/feature/auth/authApi";
import { decodeToken } from "../../../utils/decodeToken";
import { useAppDispatch } from "../../../redux/hook";
import { TUser, logout, setUser } from "../../../redux/feature/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../../../component/form/PHForm";
import PHinput from "../../../component/form/PHinput";
import { Button, Row } from "antd";
const Login = () => {
  const dispatch = useAppDispatch();
  const [login, ,] = useLoginMutation();

  const navigate = useNavigate();

  // const { handleSubmit, register } = useForm({
  //   defaultValues: {
  //     id: "A-0001",
  //     password: "admin123",
  //   },
  // });

  const onSubmit = async (formData: FieldValues) => {
    console.log("hello");
    toast.loading("loading...", { id: 1 });
    try {
      const res = await login(formData).unwrap();

      if (res?.data?.needsPasswordChange) {
        toast.success("Logging Successfully", { id: 1 });
        dispatch(logout());
        navigate("/change-password");
      } else {
        const user = decodeToken(res.data.accessToken) as TUser;
        dispatch(setUser({ user: user, token: res.data.accessToken }));
        toast.success("Logging Successfully", { id: 1 });
        navigate(`/${user.role}/dashboard`);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error logging", { id: 1 });
    }
    // console.log(formData);
  };
  const defaultValues = {
    id: "2022010001",
    password: "12345678",
  };
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Login Page</h2>

      <Row justify={"center"} style={{ marginTop: "15px" }} align={"middle"}>
        <PHForm defaultValues={defaultValues} onSubmit={onSubmit}>
          <div>
            <PHinput label="" name={"id"} type={"text"}></PHinput>
          </div>
          <div>
            <PHinput label="" name={"password"} type={"password"}></PHinput>
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

export default Login;
