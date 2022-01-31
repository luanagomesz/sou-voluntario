import { Button, Nav, NavLink, Burger, Menu, ButtonLink } from "./style";

export const Header = () => {
  return (
    <Nav>
      <NavLink to="/">
        <img src="../../Assets/souvol.png" />
      </NavLink>
      <Burger />
      <Button>
        <ButtonLink to="/">Texto</ButtonLink>
      </Button>
      <Menu>
        <NavLink to="/">Destination 1</NavLink>
        <NavLink to="/">Destination 2</NavLink>
        <NavLink to="/">Destination 3</NavLink>
        <NavLink to="/">Destination 4</NavLink>
      </Menu>

      {/* <User>
        {User.name}
        {/* <Icon1/>
          <Icon2/> 
      </User> */}
    </Nav>
  );
};
