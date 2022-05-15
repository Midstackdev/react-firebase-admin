import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Create from "./pages/create/Create";
import Show from "./pages/show/Show";
import List from "./pages/list/List";
import "./styles/dark.scss"
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import { productInputs, userInputs } from "./formsData";

function App() {

  const { darkMode } = useContext(DarkModeContext);
  const { currentUser: user } = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return user ? children : <Navigate to="/login"/>;
  }

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<RequireAuth><Home/></RequireAuth>} />
            <Route path="login" element={<Login/>} />
            <Route path="users">
              <Route index element={<RequireAuth><List/></RequireAuth>}/>
              <Route path=":userId" element={<RequireAuth><Show/></RequireAuth>}/>
              <Route path="new" element={<RequireAuth><Create title="User" inputs={userInputs}/></RequireAuth>}/>
            </Route>
            <Route path="products">
              <Route index element={<RequireAuth><List/></RequireAuth>}/>
              <Route path=":productId" element={<RequireAuth><Show/></RequireAuth>}/>
              <Route path="new" element={<RequireAuth><Create title="Product" inputs={productInputs}/></RequireAuth>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
