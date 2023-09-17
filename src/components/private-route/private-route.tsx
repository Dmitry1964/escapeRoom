import { Navigate } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../constants/const';

type PrivateRoutetProps = {
  authorizationStatus: AuthStatus;
  children: JSX.Element;
};

const PrivateRouter = ({ authorizationStatus, children } : PrivateRoutetProps): JSX.Element =>
  authorizationStatus === AuthStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoute.Login} />
  );

export default PrivateRouter;
