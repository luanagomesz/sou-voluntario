import {
  FaUser,
  FaSignOutAlt,
  FaPlusCircle,
  FaGlobeAmericas,
  FaTimesCircle,
  FaInfoCircle,
} from "react-icons/fa";
import { Button, NavLink, BurgerMenu, ButtonLink, BurgerUser } from "./style";
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

  const user = JSON.parse(localStorage.getItem("@SouVoluntario:user"));

  return (
    <>
      <BurgerMenu>
        <div className="BurgerHeader">
          <img src={Logo} alt="logo" />
          <FaTimesCircle
            className="close-icon"
            onClick={() => toggleBurger()}
            size={24}
          />
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
        <div className="footer">
          <BurgerUser>
            <FaUser className="userItems" size="24px" color="#999999" />
            <div>
              <h2 className="userItems">John Doe {user.name}</h2>
              <FaSignOutAlt
                className="userItems"
                size="24px"
                color="#999999"
                onClick={() => logout()}
              />
            </div>
          </BurgerUser>
        </div>
      </BurgerMenu>
    </>
  );
};

export default HamburgerMenu;
