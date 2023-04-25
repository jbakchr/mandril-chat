import { Link } from "react-router-dom";

export const SignInButton = () => {
  return (
    <Link to="/signin">
      <button
        style={{
          height: "40px",
          padding: "0px 10px",
          backgroundColor: "#ffd32a",
          borderRadius: "50px",
          fontFamily: "Lobster Two",
          fontSize: "17px",
          letterSpacing: "2px",
          color: "#01a75b",
        }}
      >
        Deltag i chatten
      </button>
    </Link>
  );
};
