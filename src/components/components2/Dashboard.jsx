import { FaCalendar, FaHome, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../components1/hooks/useCart";
import useAdmin from "../../components1/hooks/useAdmin";



const Dashboard = () => {
   const [cart] = useCart()
  

   const [isAdmin]= useAdmin();
   
    return (
        <div className="flex">
            {/* side bar */}
            <div className="w-64 min-h-screen bg-orange-400">

            <ul className="menu p-4">
              
              {
                 isAdmin ? <>
                 
                 <li> 
                 <NavLink to="/dashbord/adminHome"> <FaHome></FaHome> Admin Home</NavLink> 
                </li>
               <li> 
                 <NavLink to="/dashboard/addItems"> <FaShoppingCart> </FaShoppingCart> Add Items</NavLink> 
                </li>
               <li> 
                 <NavLink to="/dashboard/manageItems"> <FaCalendar></FaCalendar>Manage Items</NavLink> 
                </li>
               <li> 
                 <NavLink to="/dashboard/bookings"> <FaCalendar></FaCalendar>ManageBookings</NavLink> 
                </li>
               <li> 
                 <NavLink to="/dashboard/users"> <FaCalendar></FaCalendar>All users</NavLink> 
                </li>
                 
                 </> : <>
                   <li> 
                 <NavLink to="/dashbord/userHome"> <FaHome></FaHome> user Home</NavLink> 
                </li>
               <li> 
                 <NavLink to="/dashboard/cart"> <FaShoppingCart> </FaShoppingCart> My cart</NavLink> 
                </li>
               <li> 
                 <NavLink to="/dashboard/paymentHistory"> <FaCalendar></FaCalendar>Payment History</NavLink> 
                </li>
               <li> 
                 <NavLink to="/dashboard/history"> <FaCalendar></FaCalendar>Payment real History</NavLink> 
                </li>
               <li> 
                 <NavLink to="/dashboard/review"> <FaCalendar></FaCalendar>Review</NavLink> 
                </li>
               <li> 
                 <NavLink to="/dashboard/bookings"> <FaCalendar></FaCalendar>Bookings</NavLink> 
                </li>
                 </>
              }

              {/* shared navLink */}
                <div className="divider"></div>
                <li> 
                 <NavLink to="/"> <FaHome></FaHome>Home</NavLink> 
                </li>
                <li> 
                 <NavLink to="/order/salad"> <FaHome></FaHome>menu</NavLink> 
                </li>
                <li> 
                 <NavLink to="/order/contact"> <FaHome></FaHome>Contact</NavLink> 
                </li>
            </ul>


            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;