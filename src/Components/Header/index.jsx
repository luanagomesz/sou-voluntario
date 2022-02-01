import { FaUser, FaSignOutAlt } from "react-icons/fa";
import { Button, Nav, NavLink, Burger, Menu, ButtonLink, User } from "./style";
import Logo from "../../Assets/souvol.svg";
import { useLocation } from "react-router-dom";

export const Header = ({
  login = false,
  register = false,
  dashboardOng = false,
  isOng = false,
}) => {
  const location = useLocation();
  console.log(location);

  return (
    <Nav>
      <NavLink to="/">
        <img src={Logo} alt="Logo" />
      </NavLink>
      <Burger />
      <Menu>
        {isOng ? (
          <Button>
            <ButtonLink to="/">Criar Evento</ButtonLink>
          </Button>
        ) : (
          <NavLink className={login ? "colorTheme" : ""} to="/Events">
            Meus Eventos
          </NavLink>
        )}
        <NavLink className={login ? "colorTheme" : ""} to="/Events">
          Eventos
        </NavLink>
        <NavLink className={dashboardOng ? "colorTheme" : ""} to="/Faq">
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
