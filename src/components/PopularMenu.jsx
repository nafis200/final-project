import { useEffect, useState } from "react";
import Sectiontitle from "./Sectiontitle";
import Menuitem from "./Menuitem";




const PopularMenu = () => {
    const [menu,setMenu] = useState([])
    useEffect(()=>{
       fetch('menu.json')
       .then(res=>res.json())
       .then(data => {
         const popularItems = data.filter(item => item.category === 'popular')
         setMenu(popularItems)
       })
    },[])
    return (
        <section>
            <Sectiontitle
             heading="From Our Menu"
             subHeading="Popular items"
            ></Sectiontitle>
         <div className="grid md:grid-cols-2 gap-4 lg:grid-cols-3 grid-cols-1 mb-12">
            {
                 menu.map(item=> <Menuitem key={item._id} item={item}></Menuitem>  )
            }
         </div>

        </section>
    );
};

export default PopularMenu;