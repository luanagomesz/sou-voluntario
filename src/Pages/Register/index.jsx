import { useRegisterEvents } from "../../Contexts/RegisterEvents";
import { FormUser } from "../../Components/FormUser";
import { FormInst } from "../../Components/FormInst";
import { Background, Modal, BackgroundBottom, BackgroundTop } from "./style";

export const Register = () => {

  const {volunter} = useRegisterEvents()

  return (
    <>
      <BackgroundTop />
      <Background>
        <Modal>
          {volunter ? <FormUser /> : <FormInst />}
        </Modal>
      </Background>
      <BackgroundBottom />
    </>
  );
};
