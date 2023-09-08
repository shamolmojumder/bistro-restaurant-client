import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/banner3.jpg'; 
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu]=useMenu();
  const dessert=menu.filter(item=>item.category==="dessert")
  const soup=menu.filter(item=>item.category==="soup")
  const pizza=menu.filter(item=>item.category==="pizza")
  const salad=menu.filter(item=>item.category==="salad")
  const offered=menu.filter(item=>item.category==="offered")
  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Menu</title>
      </Helmet>
      <Cover img={menuImg} title="OUR MENU"></Cover>
      <SectionTitle heading={"Today's offer"} subHeading={"Don't miss"}></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
    </div>
  );
};

export default Menu;
