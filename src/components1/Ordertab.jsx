import Foodcart from "./hooks/Foodcart";




const Ordertab = ({items}) => {
    return (
        <div className="grid md:grid-cols-3 gap-10">
            {
                items.map(item => <Foodcart key={item._id} item={item}></Foodcart> )
            }
            </div>
            
    );
};

export default Ordertab;