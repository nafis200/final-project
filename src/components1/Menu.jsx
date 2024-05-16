import { Helmet } from "react-helmet-async";
import Cover from "../components/Cover";
import menuImg from "../images/menu/banner3.jpg";
import dessertImg from '../images/menu/dessert-bg.jpeg'
// import PopularMenu from "../components/PopularMenu";

import useMenu from "./hooks/useMenu";
import Sectiontitle from "../components/Sectiontitle";
import Menucategory from "./Menucategory";
const Menu = () => {
  const [menu] = useMenu()
 
  const dessert = menu.filter(item => item.category === 'dessert')
  const soup  = menu.filter(item => item.category === 'soup')
  const salad  = menu.filter(item => item.category === 'salad')
  const pizza = menu.filter(item => item.category === 'pizza')
  const offered = menu.filter(item => item.category === 'offered')
 
  return (
    <div>
      <Helmet>
        <title>Bistro Boss menu</title>
      </Helmet>
      
      {/* <PopularMenu></PopularMenu> */}
      title && <Cover menuImg={menuImg} title="Our Menu"></Cover>
      <Sectiontitle subHeading="Dont miss" heading="today's Offer"></Sectiontitle>
      <Menucategory items={offered}></Menucategory>
      <Menucategory img={dessertImg} items={dessert} title="dessert"></Menucategory>
      

    </div>
  );
};

export default Menu;
