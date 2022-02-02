import { useUserEvents } from "../../Contexts/RegisterEvents";
import { FormUser } from "../../Components/FormUser";
import { FormInst } from "../../Components/FormInst";
import { Background, Modal, BackgroundBottom, BackgroundTop } from "./style";

export const Register = () => {

  const {volunter} = useUserEvents()

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
