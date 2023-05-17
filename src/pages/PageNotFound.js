import { useTitle } from "../hooks/useTitle";
import { Link } from "react-router-dom";
export const PageNotFound = () => {
  useTitle("Page Not Found");
  return (
    <div className="pageNotFound">
      <p>404 / PAGE NOT FOUND</p>
      <Link to="/">
        <button>Back To Home</button>
      </Link>
    </div>
  );
};
