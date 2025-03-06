import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserAuth = ({ children }) => {
  const token = localStorage.getItem("token");
  const [isLoading, setIsLoading] = React.useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }

    axios
      .get("/user/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setIsLoading(false);
      });
  }, [navigate, token]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default UserAuth;
