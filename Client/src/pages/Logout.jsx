import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
    }

    try {
      axios
        .get("/user/logout", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            localStorage.removeItem("token");
            console.log("log out");
            navigate("/login");
          }
        });
    } catch (err) {
      console.log(err.message);
    }
  }, [navigate]);

  return <div>logout...</div>;
};

export default Logout;
