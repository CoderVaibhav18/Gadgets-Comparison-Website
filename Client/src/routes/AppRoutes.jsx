import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Home from "../pages/Home";
import UserAuth from "../auth/UserAuth";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <UserAuth>
              <Home />
            </UserAuth>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
