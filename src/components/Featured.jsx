import Sectiontitle from "./Sectiontitle";
import featuredImage from '../images/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item text-white pt-8 my-20">
            <Sectiontitle heading="Featured Item" subHeading="check it out"></Sectiontitle> 
            <div className="md:flex justify-center items-center py-20 px-36 pb-12 pt-12">

               <div>
                  <img src={featuredImage} alt="" />
               </div>
                
               <div className="md:ml-10">
                  <p>Aug 20,2029</p>
                  <p className="uppercase"> Where can i get Some? </p>
                  <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum earum voluptatem quidem veritatis asperiores expedita excepturi ex ad eligendi consequatur ab, quaerat beatae nostrum quibusdam perferendis quis esse perspiciatis alias!</p>
                  <button className="btn btn-outline">Order Now</button>
               </div>
 
            </div>
        </div>
    );
};

export default Featured;