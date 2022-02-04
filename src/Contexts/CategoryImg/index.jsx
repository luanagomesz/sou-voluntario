import { createContext, useContext, useState } from "react";

const education = require("../../assets/img/events_category/educacao.png");
const socialInclusion = require("../../assets/img/events_category/inclusao_social.png");
const environment = require("../../assets/img/events_category/meio_ambiente.png");
const socialVulnerability = require("../../assets/img/events_category/vulnerabilidade_social.png");
const others = require("../../assets/img/events_category/outros.png");

const CategoryImgContext = createContext({});

const CategoryImgProvider = ({ children }) => {
  const [imgUrl, setImgUrl] = useState(others);

  const selectImgUrl = (category) => {
    if (category.toLowerCase() === "educação") setImgUrl(education);
    if (category.toLowerCase() === "inclusão social")
      setImgUrl(socialInclusion);
    if (
      category.toLowerCase() === "meio ambiente" ||
      category.toLowerCase() === "environment"
    )
      setImgUrl(environment);
    if (category.toLowerCase() === "vulnerabilidade social")
      setImgUrl(socialVulnerability);
    if (category.toLowerCase() === "outros") setImgUrl(others);
  };

  return (
    <CategoryImgContext.Provider value={{ selectImgUrl, imgUrl }}>
      {children}
    </CategoryImgContext.Provider>
  );
};

const useCategoryImg = () => useContext(CategoryImgContext);

export { CategoryImgProvider, useCategoryImg };
