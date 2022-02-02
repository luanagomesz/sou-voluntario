import { ModalContainer } from "./style";
import { useEventsPageContext } from "../../Contexts/EventPage";
export const FilterStatesModal = ({ IsOpen }) => {
  const { setSelectedStates } = useEventsPageContext();

  const allStates = [
    "Distrito Federal",
    "Espírito Santo",
    "Minas Gerais",
    "Rio de Janeiro",
    "Santa Catarina",
    "São Paulo",
    "Acre",
    "Alagoas",
    "Amazonas",
    "Bahia",
    "Ceará",
    "Goiás",
    "Maranhão",
    "Pará",
    "Pernambuco",
    "Piauí",
    "Rondônia",
    "Sergipe ",
    "Tocantins",
    "Mato Grosso do Sul",
    "Rio Grande do Norte",
    "Rio Grande do Sul",
    "Amapá",
    "Mato Grosso",
    "Paraíba",
    "Paraná",
    "Roraima",
  ];
  let selected = [];
  const Checkthebox = () => {
    selected = [];
    for (let i = 0; i < allStates.length; i++) {
      if (document.getElementById("state" + i).checked === true) {
        selected.push(allStates[i]);
      }
    }
    setSelectedStates(selected);
  };
  return IsOpen ? (
    <ModalContainer>
      {allStates.map((state, index) => (
        <div>
          <input
            type="checkbox"
            id={"state" + index}
            name={state}
            onClick={() => Checkthebox()}
          />
          <label for={state}>{state}</label>
        </div>
      ))}
    </ModalContainer>
  ) : (
    ""
  );
};
