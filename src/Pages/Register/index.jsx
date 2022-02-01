import { useState } from "react";
import { FormUser } from "../../Components/FormUser";
import { FormInst } from "../../Components/FormInst";

import { Background, Modal} from "./style";

export const Register = () => {
  const [volunter, setVolunter] = useState(true);

  return (
    <Background>
      <Modal>
        {volunter ? <FormUser /> : <FormInst />}
        <div>
          Sou:
          <button onClick={() => setVolunter(true)}>voluntário</button>
          <button onClick={() => setVolunter(false)}>instituição</button>
        </div>
      </Modal>
    </Background>
  );
};
