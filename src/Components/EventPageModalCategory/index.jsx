import { ModalContainer } from "./style";
import { useEventsPageContext } from "../../Contexts/EventPage";
export const FilterCategoriesModal = ({ IsOpen }) => {
  const { setCategories } = useEventsPageContext();

  const Categories = [
    "educação",
    "meio ambiente",
    "vulnerabiliade social",
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
  return IsOpen ? (
    <ModalContainer>
      {Categories.map((item, index) => (
        <div>
          <input
            type="checkbox"
            id={"category" + index}
            name={item}
            onClick={() => Checkthebox()}
          />
          <label for={item}>{item}</label>
        </div>
      ))}
    </ModalContainer>
  ) : (
    ""
  );
};
