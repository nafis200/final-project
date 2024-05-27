import useAuth from "../components1/hooks/useAuth";



const Usershome = () => {
    const {users} = useAuth()
    return (
        <div>
            <h2 className="text-3xl">
                <span>Hi wellcome</span>
                {
                    users?.displayName ? users?.displayName : 'Wellcome back'
                }
            </h2>
        </div>
    );
};

export default Usershome;