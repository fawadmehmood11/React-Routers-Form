import "./App.css";
import Login from "./components/Login";
import { Routes, Route, Outlet } from "react-router-dom";
import Protected from "./components/Protected";
import User from "./components/User";
import NothingAvailable from "./components/NothingAvailable";
import EditUser from "./components/EditUser";

function App() {
  localStorage.setItem("isLoggedIn", false);
  return (
    <main className="App flex">
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route
          path="/users"
          element={
            <Protected>
              <User />
            </Protected>
          }
        >*/}
        <Route element={<Protected />}>
          <Route path="/users">
            <Route index element={<User />} />
            <Route path="edit/:userId" element={<EditUser />} />
          </Route>
        </Route>

        <Route path="/404" element={<NothingAvailable />} />
      </Routes>
      <Outlet />
    </main>
  );
}

export default App;
