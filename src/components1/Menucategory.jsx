import Cover from "../components/Cover";
import Menuitem from "../components/Menuitem";

const Menucategory = ({ items,title,coverImg }) => {
  return (
    <div>
    {
        title && <Cover menuImg={coverImg} title="Our Menu"></Cover>
    }
      <div className="grid md:grid-cols-2 gap-4 lg:grid-cols-3 grid-cols-1 mb-12">
        {items.map((item) => (
          <Menuitem key={item._id} item={item}></Menuitem>
        ))}
      </div>
    </div>
  );
};

export default Menucategory;
