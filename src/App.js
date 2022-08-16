import "./App.css";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { getLoginValue } from "./features/LoginSlice";
import Protected from "./components/Protected";
import User from "./components/User";
import NothingAvailable from "./components/NothingAvailable";

function App() {
  const isLoggedIn = useSelector(getLoginValue);
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/users"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <User />
            </Protected>
          }
        />
        <Route path="/404" element={<NothingAvailable />} />
      </Routes>
    </main>
  );
}

export default App;
