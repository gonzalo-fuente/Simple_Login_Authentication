import { Link } from "react-router-dom";

const Navbar = ({ isLogin, logOut }) => {
  return (
    <nav className="d-flex justify-content-between p-4 bg-light">
      <h5>Simple Login Application</h5>
      <div>
        <Link className="btn" to="/">
          Home
        </Link>
        <Link className="btn mx-3" to="/about">
          About
        </Link>
        {isLogin && (
          <button className="btn" onClick={logOut}>
            Log out
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
