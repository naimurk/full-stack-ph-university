import ProtectedRoutes from "./Routes/ProjectedRoutes/ProtectedRoutes";
import MainLayout from "./component/Layout/MainLayout";

const App = () => {
  return (
    <div>
      <ProtectedRoutes role={undefined}>
        <MainLayout></MainLayout>
      </ProtectedRoutes>
    </div>
  );
};

export default App;
