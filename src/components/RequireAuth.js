import * as React from "react";
import { useHistory } from "react-router-dom";

const RequireAuth = (WrappedComponent, props) => {
  const history = useHistory();
  const { applicationState, dispatch } = props;
  const { config } = applicationState;

  const [isAuthenticated, setAuthentication] = React.useState(false);

  React.useEffect(() => {
    config?.authToken !== ""
      ? setAuthentication(true)
      : setAuthentication(false);
  }, [config]);

  const loginErrorMessage = (
    <div>
      Please login in order to view this part of the application.
      <br />
      <a href="/signin">Click here!</a>
    </div>
  );

  return (
    <div>
      {isAuthenticated === true ? (
        <WrappedComponent {...props} />
      ) : (
        loginErrorMessage
      )}
    </div>
  );
};

export default RequireAuth;
