import useAuth from "../components1/hooks/useAuth";



const AdminHome = () => {
    const {users} = useAuth()
    return (
        <div>
            <h2 className="text-3xl">

            <span>Hi, WellCome</span>
            {
                users?.displayName ? users.displayName : 'hi wellcome Back'
            }

            </h2>
        </div>
    );
};

export default AdminHome;