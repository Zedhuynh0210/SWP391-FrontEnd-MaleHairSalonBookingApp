import "./App.css";
import { Routes, Route } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import Default from "./layout/defaultlayout";

function App() {
  return (
    <>
      <Routes>
        {AppRoutes.map((route, index) => {
          let Layout = route.layout ?? Default;
          const { element, ...rest } = route;
          return (
            <Route
              key={index}
              {...rest}
              path={route.path}
              element={<Layout>{element}</Layout>}
            />
          );
        })}
      </Routes>
    </>
  );
}

export default App;
