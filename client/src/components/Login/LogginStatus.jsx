import { NavLink } from "react-router-dom";
const LogginStatus = ({ status }) => {
  return (
    <div>
      <h1>
        {status
          ? "Logged Succesfully!!!"
          : "Something went wrong, please try again"}
      </h1>
      {status ? null : <NavLink to={"/login"}>Try to loggin again</NavLink>}
    </div>
  );
};

export default LogginStatus;
