import { ModalContainer } from "./style";
import { useEventsPageContext } from "../../Contexts/EventPage";
import { useEffect } from "react/cjs/react.development";
export const FilterCategoriesModal = ({ IsOpen }) => {
  const { setCategories, selectedCategories } = useEventsPageContext();

  const Categories = [
    "educação",
    "meio ambiente",
    "vulnerabilidade social",
    "inclusão social",
    "outros",
  ];
  let selected = [];
  const Checkthebox = () => {
    selected = [];
    for (let i = 0; i < Categories.length; i++) {
      if (document.getElementById("category" + i).checked === true) {
        selected.push(Categories[i]);
      }
    }
    setCategories(selected);
  };
  useEffect(() => {}, []);
  return IsOpen ? (
    <ModalContainer>
      {Categories.map((item, index) => (
        <div>
          {selectedCategories.includes(item) ? (
            <input
              type="checkbox"
              id={"category" + index}
              name={item}
              onClick={() => Checkthebox()}
              checked
            />
          ) : (
            <input
              type="checkbox"
              id={"category" + index}
              name={item}
              onClick={() => Checkthebox()}
            />
          )}

          <label for={item}>{item}</label>
        </div>
      ))}
    </ModalContainer>
  ) : (
    ""
  );
};
/*(
    <div>
      <input
        type="checkbox"
        id={"category" + index}
        name={item}
        onClick={() => Checkthebox()}
      />
      <label for={item}>{item}</label>
    </div>
  )*/
