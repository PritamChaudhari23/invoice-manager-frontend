import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "../utils/routes";
import { AuthProvider } from "./components/Auth/AuthProvider";
import "./App.css";

function App() {
  return (
    <div className="app">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
