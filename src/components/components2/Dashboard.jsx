import { FaCalendar, FaHome, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";



const Dashboard = () => {
    return (
        <div className="flex">
            {/* side bar */}
            <div className="w-64 min-h-screen bg-orange-400">

            <ul className="menu p-4">
               <li> 
                 <NavLink to="/dashbord/userHome"> <FaHome></FaHome> user Home</NavLink> 
                </li>
               <li> 
                 <NavLink to="/dashboard/cart"> <FaShoppingCart> </FaShoppingCart> My cart</NavLink> 
                </li>
               <li> 
                 <NavLink to="/dashboard/reservation"> <FaCalendar></FaCalendar>Reservation</NavLink> 
                </li>
               <li> 
                 <NavLink to="/dashboard/review"> <FaCalendar></FaCalendar>Review</NavLink> 
                </li>
               <li> 
                 <NavLink to="/dashboard/bookings"> <FaCalendar></FaCalendar>Bookings</NavLink> 
                </li>
                <div className="divider"></div>
                <li> 
                 <NavLink to="/"> <FaHome></FaHome>Home</NavLink> 
                </li>
                <li> 
                 <NavLink to="/order/salad"> <FaHome></FaHome>menu</NavLink> 
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