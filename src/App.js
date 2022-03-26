import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import useToken from "./pages/login/useToken";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Slapriority1 from "./pages/slapriority1/Slapriority1";
import Slapriority2 from "./pages/slapriority2/Slapriority2";
import Slapriority3 from "./pages/slapriority3/Slapriority3";
import Slapriority4 from "./pages/slapriority4/Slapriority4";



function App() {
 
  const { darkMode } = useContext(DarkModeContext);
  const { token, setToken } = useToken();

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
      <div className="App">
        {!token && token!=="" &&token!== undefined?  
        <Login setToken={setToken} />
        :(
          <>
        <Routes>
         <Route index element={<Home/>} />
         <Route path="/">
            <Route path="login" element={<Login />} />
            <Route path="slapriority1" element={<Slapriority1 />} />
            <Route path="slapriority2" element={<Slapriority2 />} />
            <Route path="slapriority3" element={<Slapriority3 />} />
            <Route path="slapriority4" element={<Slapriority4 />} />
          </Route>
        </Routes>
        </>
        )}
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
