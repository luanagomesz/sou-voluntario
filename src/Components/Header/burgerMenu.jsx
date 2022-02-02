import {
  FaUser,
  FaSignOutAlt,
  FaPlusCircle,
  FaGlobeAmericas,
  FaTimesCircle,
  FaInfoCircle,
} from "react-icons/fa";
import { Button, NavLink, BurgerMenu, ButtonLink, User } from "./style";
import { useAuth } from "../../Contexts/Auth";
import Logo from "../../Assets/souvol.svg";
import { useBurger } from "../../Contexts/Burger/toggle";

const HamburgerMenu = ({
  MyEvents = false,
  Events = false,
  Faq = false,
  isOng = false,
}) => {
  const { logout } = useAuth();

  const { toggleBurger } = useBurger();

  return (
    <>
      <BurgerMenu>
        <div className="BurgerHeader">
          <img scr={Logo} alt="logo" />
          <FaTimesCircle onClick={() => toggleBurger()} size="24px" />
        </div>
        <div>
          <FaGlobeAmericas />
          <NavLink className={Events ? "colorTheme" : ""} to="/Events">
            Eventos
          </NavLink>
        </div>
        <div>
          <FaPlusCircle />
          {isOng ? (
            <Button>
              <ButtonLink to="/">Criar Evento</ButtonLink>
            </Button>
          ) : (
            <NavLink className={MyEvents ? "colorTheme" : ""} to="/Events">
              Meus Eventos
            </NavLink>
          )}
        </div>
        <div>
          <FaInfoCircle />
          <NavLink className={Faq ? "colorTheme" : ""} to="/Faq">
            Faq
          </NavLink>
        </div>
      </BurgerMenu>

      <User>
        <h2 className="userItems">John Doe{User.name}</h2>
        <FaUser className="userItems" size="24px" color="#999999" />
        <FaSignOutAlt
          className="userItems"
          size="24px"
          color="#999999"
          onClick={() => logout()}
        />
      </User>
    </>
  );
};

export default HamburgerMenu;
