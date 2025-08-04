import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "../utils/routes";
import { AuthProvider } from "./components/Auth/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
