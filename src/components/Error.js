import { Link, useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-center mt-5">
      <h1 className="text-primary">{err.status + " : " + err.statusText}</h1>
      <h2 className="text-secondary">{err.data}</h2>
      <Link to="/" className="fs-2">Go Home</Link>
    </div>
  );
};

export default Error;
