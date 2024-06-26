import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import Swal from 'sweetalert2'
import useAxiosSecure from "./useAxiosSecure";
import useCart from "./useCart";
// import axios from "axios";

const Foodcart = ({ item }) => {
  const { _id,name, image, price, recipe } = item;
  const {users} = useAuth();
  const navigate = useNavigate()
  const location = useLocation()
  const axiosSecure = useAxiosSecure()
  const [,refetch] = useCart()

  const handleAddToCart = () =>{
      
          if(users && users.email){
 
            const cartItem = {
              menuId: _id,
              email: users.email,
              name,
              image,
              price
            }
            // axios.post(`http://localhost:5009/carts`,cartItem)
            axiosSecure.post('/carts',cartItem)
            .then(res =>{
               console.log(res.data)
               if(res.data.insertedId){
                Swal.fire({
                  icon: "success",
                  title: `${name} added to your cart`,
                  text: "Add",
                  footer: '<a href="#">Why do I have this issue?</a>'
                });
                refetch()
               }
              
            })
            
          }
          else{
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "user not login",
              footer: '<a href="#">Why do I have this issue?</a>'
            });
            navigate("/login",{state : {from:location}})
          }
     
  } 
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4">${price}</p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button onClick={handleAddToCart} className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Foodcart;
