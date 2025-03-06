import {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post("/user/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("token", res.data.token);
          alert("user login");
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });

    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-900">
      <div className="bg-white px-8 py-10 rounded-lg shadow-xl mx-4 w-full max-w-md">
        <h1 className="text-3xl text-center font-bold text-gray-800 mb-8">
          Log In
        </h1>
        <form
          onSubmit={(e) => submitHandler(e)}
          className="flex flex-col gap-6"
        >
          <div>
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Email Address"
            />
          </div>

          <div className="relative">
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              <i
                className={`ri-eye-${
                  showPassword ? "line" : "off-line"
                } text-gray-500`}
              />
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Dont have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-600 hover:text-blue-700 ml-2 font-medium transition-colors"
          >
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
