import { useRegisterEvents } from "../../Contexts/RegisterEvents";
import { FormUser } from "../../Components/FormUser";
import { FormInst } from "../../Components/FormInst";
import { Background, Modal, BackgroundBottom, BackgroundTop } from "./style";
import { NavNoPrivatePages } from "../../Components/NavNoPrivatePages";

export const Register = () => {
  const { volunter } = useRegisterEvents();

  return (
    <Background>
      <NavNoPrivatePages />
      <BackgroundTop />

      <Modal>
        {volunter ? (
          <FormUser userType={volunter} />
        ) : (
          <FormInst userType={volunter} />
        )}
      </Modal>
      <BackgroundBottom />
    </Background>
  );
};
