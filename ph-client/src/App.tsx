import ProtectedRoutes from "./Routes/ProjectedRoutes/ProtectedRoutes";
import MainLayout from "./component/Layout/MainLayout";

const App = () => {
  return (
    <div>
      <ProtectedRoutes>
        <MainLayout></MainLayout>
      </ProtectedRoutes>
    </div>
  );
};

export default App;
