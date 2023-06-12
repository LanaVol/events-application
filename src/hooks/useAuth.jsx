import { useRouter } from "next/router";
import { Component, useEffect } from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";

export const useAuth = (Component) => {
  const Wrapper = (props) => {
    const router = useRouter();
    const isLogged = useSelector((state) => state.auth.isLogged);

    useEffect(() => {
      if (!isLogged) {
        router.push("/login");
      } else {
        router.push("/admin");
      }
    }, [isLogged]);

    return (
      <Box>
        <Component {...props} />
      </Box>
    );
  };

  return Wrapper;
};
