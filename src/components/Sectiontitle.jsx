



const Sectiontitle = ({heading,subHeading}) => {
    return (
        <div className="mx-auto md:w-4/12 text-center my-8">

           <p className="text-yellow-600"> 
           ---{subHeading}---</p> 
           <h3 className="text-3xl uppercase border-y-4 py-4 mt-2">{heading}</h3>

        </div>
    );
};

export default Sectiontitle;