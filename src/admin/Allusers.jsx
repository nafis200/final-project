import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../components1/hooks/useAxiosSecure";



const Allusers = () => {

    const axiosSecure = useAxiosSecure()
    const {data: users = []} = useQuery({
        queryKey:['users'],
        queryFn: async()=>{
          const res = await axiosSecure.get('/users')
          return res.data;
        }
    })
    return (
        <div>

           <div className="flex justify-evenly my-4">
            <h2 className="text-3xl">All users</h2>
            <h2 className="text-3xl">total users :{users.length}</h2>
           </div>

           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map(user => <tr key={user._id}>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr> )
      }
      
    </tbody>
  </table>
</div>

        </div>
    );
};

export default Allusers;