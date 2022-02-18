import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./components/Login";

import useToken from "./login/useToken";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  const { token, setToken, clearToken } = useToken();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar isLogin={token} logOut={clearToken} />
        <div className="container p-4">
          {!token ? (
            <Login setToken={setToken} />
          ) : (
            <>
              <h1 className="mb-4">Application</h1>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </>
          )}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
