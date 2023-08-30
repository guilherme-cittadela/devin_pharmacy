import { PublicRoutes } from "./publicRoutes"
import { PrivateRoutes } from "./privateRoutes"
import { useAuth } from "../assets/context/authContext";
function RoutesApp() {
  const { isAuthenticated, login } = useAuth();
  const token = localStorage.getItem("token");


    if (isAuthenticated || token ) {
      return <PrivateRoutes/>
    }
    return (
        <PublicRoutes/>
    )
}
export { RoutesApp }