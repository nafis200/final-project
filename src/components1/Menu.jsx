import { Helmet } from "react-helmet-async";
import Cover from "../components/Cover";
import menuImg from "../images/menu/banner3.jpg";
import PopularMenu from "../components/PopularMenu";
const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss menu</title>
      </Helmet>
      <Cover menuImg={menuImg} title="Our Menu"></Cover>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Menu;
