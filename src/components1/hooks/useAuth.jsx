import { useContext } from "react";
import { AuthContext } from "../../components/components2/Authprovider";



const useAuth = () => {
    const auth = useContext(AuthContext)

    return (
        auth
    );
};

export default useAuth;