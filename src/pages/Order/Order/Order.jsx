import { useState } from "react";
import ordercover from "../../../assets/shop/order.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";

const Order = () => {
  const [tabIndex,setTabIndex]=useState(0)
  const[menu] =useMenu();
  const desserts=menu.filter(item=>item.category==="dessert")
  const soup=menu.filter(item=>item.category==="soup")
  const pizza=menu.filter(item=>item.category==="pizza")
  const salad=menu.filter(item=>item.category==="salad")
  const offered=menu.filter(item=>item.category==="offered")
  return (
    <div>
      <Cover img={ordercover} title={"Order Food"}></Cover>
      <Tabs selectedIndex={tabIndex} onSelect={(tabIndex) => setTabIndex(tabIndex)}>
      <TabList>
        <Tab>Salad</Tab>
        <Tab>Pizza</Tab>
        <Tab>Dessert</Tab>
        <Tab>Soup</Tab>
        <Tab>Drinks</Tab>
        
      </TabList>
      <TabPanel></TabPanel>
      <TabPanel></TabPanel>
      <TabPanel></TabPanel>
      <TabPanel></TabPanel>
      <TabPanel></TabPanel>
    </Tabs>
    </div>
  );
};

export default Order;
