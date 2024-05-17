import { useState } from "react";
import Cover from "../components/Cover";
import orderCover from "../images/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "./hooks/useMenu";
import Foodcart from "./hooks/Foodcart";
import Ordertab from "./Ordertab";
import { useParams } from "react-router-dom";

const Order = () => {
  const categories = ['salad','pizza','soup','dessert','drinks']
  const [menu] = useMenu()
  const {category} = useParams()
  const initialIndex = categories.indexOf(category)
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const dessert = menu.filter(item => item.category === 'dessert')
  const soup  = menu.filter(item => item.category === 'soup')
  const salad  = menu.filter(item => item.category === 'salad')
  const pizza = menu.filter(item => item.category === 'pizza')
  const offered = menu.filter(item => item.category === 'offered')
  return (
    <div>
      <Cover menuImg={orderCover} title="order Food"></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
            <Ordertab items={salad}></Ordertab>
        </TabPanel>
        <TabPanel>
        <Ordertab items={pizza}></Ordertab>
        </TabPanel>
        <TabPanel>
        <Ordertab items={soup}></Ordertab>
        </TabPanel>
        <TabPanel>
        <Ordertab items={dessert}></Ordertab>
        </TabPanel>
        <TabPanel>
        <Ordertab items={offered}></Ordertab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
