import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import { Form, Button, InputSearch } from "./style";

export const EventsSearch = () => {
  const [isActivateDonation, setIsActivateDonation] = useState(false);
  const [isActivateState, setIsActivateState] = useState(false);
  const [isActivateCategory, setIsActivateCategory] = useState(false);

  const activateDonation = () => setIsActivateDonation(!isActivateDonation);
  const activateState = () => setIsActivateState(!isActivateState);
  const activateCategory = () => setIsActivateCategory(!isActivateCategory);

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <Button onClick={activateDonation} isActivate={isActivateDonation}>
        Somente doações
      </Button>
      <Button onClick={activateState} isActivate={isActivateState}>
        Estado
      </Button>
      <Button onClick={activateCategory} isActivate={isActivateCategory}>
        Categoria
      </Button>
      <InputSearch>
        <input placeholder="Digite sua pesquisa" />
        <button>
          <FaSearch />
        </button>
      </InputSearch>
    </Form>
  );
};
