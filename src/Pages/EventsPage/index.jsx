import {
  PageContainer,
  FakeHeader,
  SearchContainer,
  CardContainer,
} from "./style";

export const Events = () => {
  return (
    <PageContainer>
      <FakeHeader>Fake Header</FakeHeader>
      <SearchContainer>
        {" "}
        <button>Somente doações</button>
        <button>Estado</button>
        <button>Categoria</button>
      </SearchContainer>
      <CardContainer />
    </PageContainer>
  );
};
