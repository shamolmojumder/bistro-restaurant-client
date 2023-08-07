import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredimg from "../../../assets/home/featured.jpg";
import "./Featured.css"
const Featured = () => {
  return (
    <div className="featured-item text-white pt-8 my-20">
      <SectionTitle
        subHeading="---Check it out---"
        heading="FROM OUR MENU"
      ></SectionTitle>

      <div className="md:flex justify-normal items-center pb-20 pt-12 px-36">
        <div>
          <img src={featuredimg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20,2023 </p>
          <p>WHERE CAN I GET SOME?</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
            asperiores nisi vel error pariatur maiores quisquam nobis
            voluptatibus. Exercitationem, ipsam maxime. Tempora laborum eos
            natus, quisquam officiis ipsa, non fuga illum est explicabo tempore
            harum quae, debitis fugit velit suscipit porro eum. Eveniet,
            laboriosam. Architecto fuga iure perspiciatis corrupti explicabo?
          </p>
          <button className="btn btn-outline">Read more</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
