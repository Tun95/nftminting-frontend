import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@rainbow-me/rainbowkit/styles.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NotFoundScreen from "./utilities/404 error/PageNotFound";
import HomeScreen from "./screens/homescreen/HomeScreen";
import NavBar from "./common/navbar/NavBar";
import useScrollToTop from "./utilities/scroll to/ScrollToTop";
import MintSuccessScreen from "./screens/mintsuccesscrenn/MintSuccessScreen";

function App() {
  useScrollToTop();

  return (
    <>
      <div className="app">
        <ToastContainer position="bottom-center" limit={1} />
        <NavBar />
        <Routes>
          <Route path="*" element={<NotFoundScreen />} />
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="/success/:id" element={<MintSuccessScreen />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
