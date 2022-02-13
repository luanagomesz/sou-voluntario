import { useState } from "react";
import { api } from "../../Service";
import { PageContainer, ModalContainer } from "./style";
import { AiFillCloseSquare } from "react-icons/ai";

import { useAuth } from "../../Contexts/Auth";
export const EditModal = ({ ong, edit, RefreshPage, Modalset }) => {
  const [userInput, setUserInput] = useState("");
  const [request, setRequest] = useState(["location"]);
  const { accessToken } = useAuth();

  const editOng = () => {
    if (userInput.length > 0) {
      api
        .patch(`/users/${ong.id}`, `${edit.toString()}:`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        })
        .then((res) => {
          console.log(res.data);
          RefreshPage();
          Modalset(false);
        });
    }
  };
  return (
    <PageContainer>
      <ModalContainer>
        <AiFillCloseSquare onClick={() => Modalset()} />
        <textarea
          placeholder={edit}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button onClick={() => editOng()}>Editar</button>
      </ModalContainer>
    </PageContainer>
  );
};
