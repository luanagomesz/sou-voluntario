import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { FaHome, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { GenIcon } from "react-icons";

import { Button, IconHome, IconSignin, IconRegister, Container } from "./style";

export const NavNoPrivatePages = () => {
  const [nextLocation, setNextLocation] = useState("");
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.toLowerCase() === "/login") {
      setNextLocation("/Register");
    } else {
      setNextLocation("/Login");
    }
  }, []);

  const redirect = (url) => {
    history.push(url);
  };

  return (
    <Container location={location.pathname}>
      <Button onClick={() => redirect("/")}>
        <IconHome />
      </Button>
      <Button onClick={() => redirect(nextLocation)}>
        {nextLocation === "/Login" ? <IconSignin /> : <IconRegister />}
      </Button>
    </Container>
  );
};
