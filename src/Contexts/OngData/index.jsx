import { createContext, useContext, useState } from "react";
import { api } from "../../Service";

const OngDataContext = createContext({});

const OngDataProvider = ({ children }) => {
  const userType = "ong";
  const id = 16;

  const [events, setEvents] = useState([]);

  function LoadEvents() {
    api.get(`/users/${id}/events`).then(response => {
      console.log(response);
    });
  }

  function UpdateProfile({}) {
    api.patch(`users/${id}`, 
        
    ).then((response) => {

    });
  }
};
