

import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../components1/hooks/useAdmin";
import useAuth from "../../components1/hooks/useAuth";



const AdminRoute = ({children}) => {
   
    const {users,loading} = useAuth()
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();
    if(loading || isAdminLoading){
        return <span className="loading loading-spinner text-error lg:text-4xl md:text-3xl text-2xl lg:ml-[700px] md:ml-[400px] ml-[200px] mt-10"></span>
    }

    if (users && isAdmin) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>

};

export default AdminRoute;