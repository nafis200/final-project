import Cover from "../components/Cover";
import Menuitem from "../components/Menuitem";

const Menucategory = ({ items,title,img }) => {
  return (
    <div className="pt-8">
    {
        title && <Cover menuImg={img} title={title}></Cover>
    }
      <div className="grid md:grid-cols-2 gap-4 lg:grid-cols-3 grid-cols-1 mb-12 mt-16">
        {items.map((item) => (
          <Menuitem key={item._id} item={item}></Menuitem>
        ))}
      </div>
    </div>
  );
};

export default Menucategory;
