import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../redux/feature/auth/authApi";
import { decodeToken } from "../../utils/decodeToken";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { setUser } from "../../redux/feature/auth/authSlice";

const Login = () => {
  const dispatch = useAppDispatch();
  const [login, ,] =
    useLoginMutation();
    const {user: userInfo , token: userToken} = useAppSelector((state)=> state.auth)
  const { handleSubmit, register } = useForm({
    defaultValues: {
      id: "0001",
      password: "admin12345",
    },
  });

  const onsubmit = async (formData) => {
    // console.log(formData)
    const res = await login(formData).unwrap();
    const user = decodeToken(res.data.accessToken);
    // console.log(user);
    dispatch(setUser({ user: user, token: res.data.accessToken }));
  };
  console.log(userInfo)
  console.log(userToken)
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
