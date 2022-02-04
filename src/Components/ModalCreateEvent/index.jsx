import { ModalContainer, PageContainer } from "./style";
import { useEventsPageContext } from "../../Contexts/EventPage";
import { AiFillCloseSquare } from "react-icons/ai";
import { useEffect, useState } from "react";
import { api } from "../../Service";
import { useAuth } from "../../Contexts/Auth";
import { toast } from "react-toastify";
export const ModalCreateEvent = ({ setCreateEventModal }) => {
  const { accessToken, user } = useAuth();
  const { refresh, setRefresh } = useEventsPageContext();
  const [userInput, setUserInput] = useState({
    title: "",
    description: "",
    workType: "donation",
    donationGoal: 0,
    amountDonated: 0,
    category: "educação",
    state: "Distrito Federal",
    completed: false,
    necessaryVoluntaries: 0,
    voluntaries: [],
    ongName: "ONG",
    userId: "1",
  });

  useEffect(() => {
    console.log(userInput);
  }, [userInput]);

  useEffect(() => {
    console.log(accessToken);
    console.log(user);
    setUserInput({ ...userInput, ongName: user.name, userId: user.id });
  }, []);

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
  const Categories = [
    "educação",
    "meio ambiente",
    "vulnerabilidade social",
    "inclusão social",
    "outros",
  ];

  const CreateEvent = () => {
    if (userInput.workType === "volunteering") {
      if (
        userInput.title.length > 0 &&
        userInput.description.length > 0 &&
        userInput.workType.length > 0 &&
        userInput.category.length > 0 &&
        userInput.state.length > 0 &&
        userInput.necessaryVoluntaries > 0 &&
        userInput.ongName.length > 0 &&
        userInput.userId !== ""
      ) {
        api
          .post("/events", userInput, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          })
          .then((res) => {
            refresh === true ? setRefresh(false) : setRefresh(true);

            console.log(res.data);
            toast("Evento Registrado");
            setCreateEventModal(false);
          })
          .catch((err) => console.log(err));
      } else {
        toast("Preencha todos campos");
      }
    } else {
      toast("Evento de doação em construção");
    }
  };

  return (
    <PageContainer>
      <ModalContainer>
        <AiFillCloseSquare onClick={() => setCreateEventModal(false)} />
        <input
          type="text"
          placeholder="Nome do Evento"
          onChange={(e) =>
            setUserInput({ ...userInput, title: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Endereço"
          onChange={(e) =>
            setUserInput({ ...userInput, adress: e.target.value })
          }
        />
        <div className="selectWork">
          <button
            className={
              userInput.workType === "donation" ? "selectedButton" : ""
            }
            onClick={() => setUserInput({ ...userInput, workType: "donation" })}
          >
            Doação
          </button>
          <button
            className={
              userInput.workType === "volunteering" ? "selectedButton" : ""
            }
            onClick={() =>
              setUserInput({ ...userInput, workType: "volunteering" })
            }
          >
            Voluntariado
          </button>
        </div>
        <input
          type="number"
          placeholder={
            userInput.workType === "donation"
              ? "Doação necessária"
              : "Voluntários necessarios"
          }
          onChange={(e) => {
            userInput.workType === "donation"
              ? setUserInput({ ...userInput, donationGoal: e.target.value })
              : setUserInput({
                  ...userInput,
                  necessaryVoluntaries: e.target.value,
                });
          }}
        />
        <div className="middleDiv">
          <div className="cointainerOption">
            <label>Estado</label>
            <select
              name="Estado"
              onChange={(e) => {
                console.log(e.target.value);
                setUserInput({ ...userInput, state: e.target.value });
              }}
            >
              {allStates.map((item) => (
                <option value={item}>{item}</option>
              ))}
            </select>
          </div>
          <div className="cointainerOption">
            <label>Categoria</label>
            <select
              name="Categoria"
              onChange={(e) => {
                console.log(e.target.value);
                setUserInput({ ...userInput, category: e.target.value });
              }}
            >
              {Categories.map((item) => (
                <option value={item}>{item}</option>
              ))}
            </select>
          </div>
        </div>
        <textarea
          placeholder="Descrição"
          name="Descrição"
          id="textarea"
          cols="30"
          rows="8"
          onChange={(e) =>
            setUserInput({ ...userInput, description: e.target.value })
          }
        ></textarea>

        <button className="create" onClick={() => CreateEvent()}>
          {" "}
          Criar novo evento
        </button>
      </ModalContainer>
    </PageContainer>
  );
};
