import { FaUser, FaSignOutAlt } from "react-icons/fa";
import { Button, Nav, NavLink, Burger, Menu, ButtonLink, User } from "./style";
import Logo from "../../Assets/souvol.svg";
import { useAuth } from "../../Contexts/Auth";
import HamburgerMenu from "./burgerMenu";
import { useBurger } from "../../Contexts/Burger/toggle";

export const Header = ({
  MyEvents = false,
  Events = false,
  Faq = false,
  isOng = false,
}) => {
  const { logout } = useAuth();

  const { toggleBurger, burger } = useBurger();

  const user = JSON.parse(localStorage.getItem("@SouVoluntario:user"));

  return (
    <Nav>
      <NavLink to="/">
        <img src={Logo} alt="Logo" />
      </NavLink>

      <Burger onClick={() => toggleBurger()} />
      {burger && <HamburgerMenu className="HamburgerMenu" />}
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
        <h2 className="userItems">John Doe{user.name}</h2>
        <FaUser className="userItems" size="24px" color="#999999" />
        <FaSignOutAlt
          className="userItems"
          size="24px"
          color="#999999"
          onClick={() => logout()}
        />
      </User>
    </Nav>
  );
};
