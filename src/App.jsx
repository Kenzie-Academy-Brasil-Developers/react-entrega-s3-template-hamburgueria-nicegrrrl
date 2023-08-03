import { HomePage } from "./pages/HomePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const App = () => {
  return (
    <>
      <HomePage />
      <ToastContainer position="bottom-right" autoClose={1 * 2000} />
    </>
  );
};

export default App;
