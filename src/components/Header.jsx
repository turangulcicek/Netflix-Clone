import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="d-flex justify-content-between align-items-center px-5 shadow">
      <Link to={"/"}>
        <img
          style={{ width: "200px" }}
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
      </Link>

      <div className="d-flex gap-3">
        <button className="btn btn-danger">Login</button>
        <button className="btn btn-warning">Register</button>
      </div>
    </div>
  );
};

export default Header;
