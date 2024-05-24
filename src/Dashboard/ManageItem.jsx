import Sectiontitle from "../components/Sectiontitle";
import useAxiosSecure from "../components1/hooks/useAxiosSecure";
import useMenu from "../components1/hooks/useMenu";

const ManageItem = () => {
  const [menu] = useMenu()
  const axiosSecure = useAxiosSecure()
  const handleDelete = async(item)=>{
        console.log(item)
        const res = await axiosSecure.delete(`/menu/${item}`)

        // Swal.fire  
        // .then(async(result))
        if(res.data.deletedCount > 0){
            
        }


  }
  
  return (
    <div>
      <Sectiontitle
        heading="manage All Item"
        subHeading="Manage Item"
      ></Sectiontitle>

      <section>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}

            <thead>
            <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Item name</th>
                    <th>Price</th>
                    <th>Update</th>
                    <th>Delete</th>
                  </tr>
            </thead>
            <tbody>
              {
                menu.map(item => <tr>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={item.image}
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {item.name}
                    </td>
                    <td>{item.price}</td>
                    <th>
              <button onClick={()=> handleDelete(item._id)} className="btn btn-ghost btn-xs">X</button>
            </th>
                  </tr> )
              }
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default ManageItem;
