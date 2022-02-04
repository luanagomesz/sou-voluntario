import axios from "axios";
import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../Service";
import { useAuth } from "../../Contexts/Auth";

export const OngDataContext = createContext({});

export const OngDataProvider = ({ children }) => {
  const [listEvents, setListEvents] = useState([]);
  const { accessToken } = useAuth();
  console.log(accessToken);

  function LoadEvents(id) {
    api
      .get(`/users/${id}/events`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then(response => {
        console.log(response);
        setListEvents(response.data);
      })
      .catch(err => console.log(err));
  }

  function UpdateProfile({
    cityState,
    slogan,
    description,
    cep,
    contactEmail,
    website,
    id,
  }) {
    api
      .patch(`users/${id}`, {
        cityState: { cityState },
        slogan: { slogan },
        description: { description },
        cep: { cep },
        contact: {
          email: { contactEmail },
          website: { website },
        },
      })
      .then(response => {
        console.log(response);
        toast.success("Editado com sucesso!");
      })
      .catch(err => console.log(err));
  }

  return (
    <OngDataContext.Provider value={{ LoadEvents, UpdateProfile, listEvents }}>
      {children}
    </OngDataContext.Provider>
  );
};
