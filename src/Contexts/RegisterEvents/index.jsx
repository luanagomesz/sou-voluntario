import { createContext, useContext, useState } from "react";

const RegisterEventsContext = createContext({});

const RegisterEventsProvider = ({ children }) => {

  const [volunter, setVolunter] = useState(true);
  
  const toggleForm = () =>{
    setVolunter(!volunter)
  }

  return (
    <RegisterEventsContext.Provider
      value={{ volunter, toggleForm}}
    >
      {children}
    </RegisterEventsContext.Provider>
  );
};

const RegisterEvents = () => {
  const context = useContext(RegisterEventsContext);

  return context;
};

export { RegisterEventsProvider, RegisterEvents };
