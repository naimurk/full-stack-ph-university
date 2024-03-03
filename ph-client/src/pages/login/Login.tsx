import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../../redux/feature/auth/authApi";
import { decodeToken } from "../../utils/decodeToken";
import { useAppDispatch } from "../../redux/hook";
import { TUser, setUser } from "../../redux/feature/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const dispatch = useAppDispatch();
  const [login, ,] = useLoginMutation();

  const navigate = useNavigate();

  const { handleSubmit, register } = useForm({
    defaultValues: {
      id: "A-0001",
      password: "admin123",
    },
  });

  const onsubmit = async (formData: FieldValues) => {
    toast.loading("loading...", { id: 1 });
    try {
      const res = await login(formData).unwrap();
      const user = decodeToken(res.data.accessToken) as TUser;
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("Logging Successfully", { id: 1 });
      navigate(`/${user.role}/dashboard`);
    } catch (error) {
      console.log(error);
      toast.error("Error logging", { id: 1 });
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit(onsubmit)}>
        <div>
          <label htmlFor="id">ID:</label>
          <input type="text" id="id" {...register("id")} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" {...register("password")} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
