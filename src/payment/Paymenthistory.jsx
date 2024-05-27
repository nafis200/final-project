import { useQuery } from "@tanstack/react-query";
import useAuth from "../components1/hooks/useAuth";
import useAxiosSecure from "../components1/hooks/useAxiosSecure";




const Paymenthistory = () => {
    const {users} = useAuth()
    const axiosSecure = useAxiosSecure()

    const {data: payments = []} = useQuery({
        queryKey:['payments',users.email],
        queryFn:async()=>{
            const res = await axiosSecure.get(`/payments/${users.email}`)
            return res.data
        }
    })
    
    return (
        <div>
            <h2 className="text-3xl">total Payment:{payments.length}</h2>
        </div>
    );
};

export default Paymenthistory;