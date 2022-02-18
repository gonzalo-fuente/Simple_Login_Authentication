import { useState } from "react";
import loginUser from "../login/loginUser";

const Login = ({ setToken }) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
  };

  return (
    <div className="col-xl-4 col-lg-5 col-md-7 col-sm-9 col-10 mx-auto border rounded shadow">
      <div className="d-flex flex-column align-items-center p-4">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="img-fluid rounded-circle w-50 mb-3"
        />
        <h2>User Login</h2>

        <form
          className="d-flex flex-column align-items-center"
          onSubmit={handleSubmit}
        >
          <label className="form-label">
            <p className="form-text">Username</p>
            <input
              type="text"
              required
              className="form-control"
              onChange={(e) => setUserName(e.target.value)}
            />
          </label>
          <label className="form-label">
            <p className="form-text">Password</p>
            <input
              type="password"
              required
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <div className="d-grid col-12 mt-3">
            <button type="submit" className="btn btn-outline-success">
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
