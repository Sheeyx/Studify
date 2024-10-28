import React from "react";
import { Navigate } from "react-router-dom";
import { useGlobals } from "../../../../app/hooks/useGlobals";

interface PrivateRouteProps {
  component: React.ComponentType<any>;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
}) => {
  const { authMember } = useGlobals();

  return authMember ? <Component /> : <Navigate to="/" />;
};

export default PrivateRoute;
