import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
    const [menu]=useMenu();
    const popularMenu=menu.filter(item=>item.category==="popular")    
    
    return (
        <section className="mb-12">
            <SectionTitle subHeading="---Don't miss---" heading="TODAY'S OFFER"></SectionTitle>            
            <div className="grid md:grid-cols-2 gap-10">
                {popularMenu.map(item=><MenuItem key={item._id} item={item}></MenuItem> )}
            </div>
            <div className="my-4 flex justify-center">
            <button className="btn btn-outline border-0 border-b-4">ORDER YOUR FAVOURITE FOOD</button>
            </div>
        </section>
    );
};

export default PopularMenu;