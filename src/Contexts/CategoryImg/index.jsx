import { createContext, useContext, useState } from "react";

const CategoryImgContext = createContext({});

const CategoryImgProvider = ({ children }) => {
  const imgUrl = {
    educação: require("../../assets/img/events_category/educacao.png"),
    education: require("../../assets/img/events_category/educacao.png"),
    "inclusão social": require("../../assets/img/events_category/inclusao_social.png"),
    "social inclusion": require("../../assets/img/events_category/inclusao_social.png"),
    "meio ambiente": require("../../assets/img/events_category/meio_ambiente.png"),
    environment: require("../../assets/img/events_category/meio_ambiente.png"),
    "vulnerabilidade social": require("../../assets/img/events_category/vulnerabilidade_social.png"),
    "social vulnerability": require("../../assets/img/events_category/vulnerabilidade_social.png"),
    "vulnerabiliade social": require("../../assets/img/events_category/vulnerabilidade_social.png"),

    outros: require("../../assets/img/events_category/outros.png"),
    others: require("../../assets/img/events_category/outros.png"),
  };

  return (
    <CategoryImgContext.Provider value={{ imgUrl }}>
      {children}
    </CategoryImgContext.Provider>
  );
};

const useCategoryImg = () => useContext(CategoryImgContext);

export { CategoryImgProvider, useCategoryImg };
