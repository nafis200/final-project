import { Helmet } from "react-helmet-async";
import Cover from "../components/Cover";
import menuImg from "../images/menu/banner3.jpg";
import dessertImg from '../images/menu/dessert-bg.jpeg'
import pizzaImg from '../images/menu/pizza-bg.jpg'
import saladImg from '../images/menu/salad-bg.jpg'
// import PopularMenu from "../components/PopularMenu";
import soupImg from '../images/menu/soup-bg.jpg'

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
      <Cover menuImg={menuImg} title="Our Menu"></Cover>
      <Sectiontitle subHeading="Dont miss" heading="today's Offer"></Sectiontitle>
      <Menucategory items={offered}></Menucategory>

      <Menucategory img={dessertImg} items={dessert} title="dessert"></Menucategory>
      <Menucategory  img={pizzaImg} items={pizza} title="Pizza"></Menucategory>
      <Menucategory img={saladImg} title="salads" items={salad}></Menucategory>
      <Menucategory img={soupImg} title="Soups" items={soup}></Menucategory>
      

    </div>
  );
};

export default Menu;
