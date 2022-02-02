import { ToastContainer } from "react-toastify";
import GlobalStyle from "./GlobalStyle/style";
import Routes from "./Routes";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer position="top-center" />
      {/* exemplo de provider */}
      <GlobalStyle />
      <Routes />
      {/* exemplo de provider */}
    </>
  );
}

export default App;
