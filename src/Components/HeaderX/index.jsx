import { FaUser, FaSignOutAlt } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import { Nav, MenuNav, Divisory } from "./style";
import Logo from "../../Assets/souvol.svg";
import { useState } from "react";
import { useAuth } from "../../Contexts/Auth";
import { Link } from "react-router-dom";
import {
  FaGlobeAmericas,
  FaInfoCircle,
  FaPlusCircle,
  FaRegEdit,
} from "react-icons/fa";
import { useHistory } from "react-router";
import { useEffect } from "react";
export const Header = ({
  MyEvents = false,
  Events = false,
  Faq = false,
  isOng = false,
}) => {
  const [burguer, setBurguer] = useState(false);
  const { logout, user } = useAuth();
  const [userName, setUserName] = useState("");
  const history = useHistory();
  console.log(user);
  useEffect(() => {
    user.name !== undefined ? setUserName(user.name) : setUserName("JohnDoe");
  }, []);

  const toggleBurguer = () => {
    setBurguer(!burguer);
  };

  const OngProfile = () => {
    if (userType !== "voluntary") {
      toggleBurguer();
      return history.push("/DashboardOng");
    } else {
      toggleBurguer();
      return history.push("/DashboardUser");
    }
  };
  const userType = "voluntary";

  const handleLogout = () => {
    logout();
    history.push("/");
  };

  return (
    <>
      <Nav>
        <Link to="/">
          <img src={Logo} alt="Sou Voluntário"></img>
        </Link>
        {/* versão mobile */}
        <button onClick={toggleBurguer} className="menu_button">
          {burguer ? (
            <AiOutlineMenu className="menu_icon" />
          ) : (
            <FiX className="x_icon" />
          )}
        </button>

        {/* versão desktop */}
        <div className="links">
          {user.userType === "voluntary" ? (
            <Link to="/DashboardUser">Meus Eventos</Link>
          ) : (
            <button className="newEvent_desktop">Criar novo evento</button>
          )}
          <Link to="/Events">Eventos</Link>
          <Link to="/Faq">Faq</Link>
          <p className="name_user">{userName}</p>
          <FaUser className="icon" onClick={OngProfile} />
          <FaSignOutAlt onClick={handleLogout} className="icon" />
        </div>
      </Nav>
      <MenuNav burguer={burguer}>
        {/* <div className="header_menu">
          <img className="logo_menu" src={Logo} alt="Sou Voluntário"></img>
          <button onClick={toggleBurguer}>
            <FiX className="x_icon" />
          </button>
        </div> */}
        <Divisory />
        <div className="box_link">
          {user.userType === "voluntary" ? (
            <>
              <Link
                onClick={toggleBurguer}
                to="/DashboardUser"
                className="link_mobile"
              >
                <FaRegEdit className="icon" />
                Meus Eventos
              </Link>
              <Divisory />
            </>
          ) : (
            <>
              <button onClick={toggleBurguer} className="newEvent_mobile">
                <FaPlusCircle className="icon" />
                Criar novo evento
              </button>
              <Divisory />
            </>
          )}
          <Link onClick={toggleBurguer} to="/Events" className="link_mobile">
            <FaGlobeAmericas className="icon" />
            Eventos
          </Link>
          <Divisory />
          <Link onClick={toggleBurguer} to="/Faq" className="link_mobile">
            <FaInfoCircle className="icon" />
            Faq
          </Link>
          <Divisory />
        </div>
        <div className="user_container">
          <div className="info_user">
            <FaUser className="icon" onClick={OngProfile} />
            <p className="name_user">{userName}</p>
          </div>
          <FaSignOutAlt className="icon" />
        </div>
      </MenuNav>
    </>
  );
};
