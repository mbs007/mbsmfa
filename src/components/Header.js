import { Link, useNavigate } from 'react-router-dom';
import {headLogo } from "../utils/constants";
const Header = () => {
  const navigate = useNavigate();
  const onClickLogout = () => { 
    localStorage.removeItem('jokesAppUserInfo');
    navigate('/login');
  }
  return (
    <nav
      className="fixed-top navbar bg-primary-subtle shadow"
      style={{ height: "80px" }}
    >
      <div className="col-12 d-flex flex-row justify-content-between align-items-center px-5">
        <div className="d-flex flex-row align-items-center">
          <Link to="/">
            <img
              style={{ width: "35px", height: "35px" }}
              src={headLogo}
              alt="logo"
            />
          </Link>
          <p className="text-black fw-bolder fs-3 m-3">Jokes</p>
        </div>

        <button className="btn btn-danger" onClick={onClickLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Header;
