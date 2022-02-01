import { FaUser, FaSignOutAlt } from "react-icons/fa";
import { Button, Nav, NavLink, Burger, Menu, ButtonLink, User } from "./style";
import Logo from "../../Assets/souvol.svg";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export const Header = ({
  MyEvents = false,
  Events = false,
  Faq = false,
  isOng = false,
}) => {
  const [burger, setBurger] = useState(false);

  const toggleBurger = () => {
    setBurger(!burger);
  };

  return (
    <Nav>
      <NavLink to="/">
        <img src={Logo} alt="Logo" />
      </NavLink>
      <Button onClick={toggleBurger}>
        <Burger />
      </Button>
      <Menu>
        {isOng ? (
          <Button>
            <ButtonLink to="/">Criar Evento</ButtonLink>
          </Button>
        ) : (
          <NavLink className={MyEvents ? "colorTheme" : ""} to="/Events">
            Meus Eventos
          </NavLink>
        )}
        <NavLink className={Events ? "colorTheme" : ""} to="/Events">
          Eventos
        </NavLink>
        <NavLink className={Faq ? "colorTheme" : ""} to="/Faq">
          Faq
        </NavLink>
      </Menu>

      <User>
        <h2 className="userItems">John Doe{User.name}</h2>
        <FaUser className="userItems" size="24px" color="#999999" />
        <FaSignOutAlt className="userItems" size="24px" color="#999999" />
      </User>
    </Nav>
  );
};
