import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userContextData } from "../context/userContext";
import axios from "axios";

const UserAuth = ({ children }) => {
  const token = localStorage.getItem("token");
  const [isLoading, setIsLoading] = React.useState(true);
  const navigate = useNavigate();
  const { user } = useContext(userContextData);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
    if (!user) {
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
  }, [navigate, token, user]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default UserAuth;
