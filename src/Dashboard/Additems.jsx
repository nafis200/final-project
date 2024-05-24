import Sectiontitle from "../components/Sectiontitle";
import { useForm } from "react-hook-form";
import useAxiospublic from "../components1/hooks/useAxiospublic";
import useAxiosSecure from "../components1/hooks/useAxiosSecure";

const image_hosting = import.meta.env.VITE_IMAGE_HOSTING_KEY

const image_api = `https://api.imgbb.com/1/upload?key=${image_hosting}`

const Additems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiospublic()
  const axiosSecure = useAxiosSecure()
  const onSubmit = async(data) => {
    const imageFile = {image: data.image[0]}
    const res = await axiosPublic.post(image_api,imageFile,{
        headers:{
            'content-type':'multipart/form-data'
        }
    })
     if(res.data.success){
        const menuItem = {
           name:data.name,
           category:data.category,
           price:parseFloat(data.price),
           recipe:data.recipe,
           image:res.data.data.display_url
        }
        // 
        const menuRes = await axiosSecure.post('/menu',menuItem) 
        console.log(menuRes.data);
        if(menuRes.data.insertedId){
              reset()
        }
     }
  };
  return (
    <div>
      <Sectiontitle
        heading="add an items"
        subHeading="whats new"
      ></Sectiontitle>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full  my-6">
            <div className="label">
              <span className="label-text">Recipe name*</span>
            </div>
            <input
              type="text"
              placeholder="Recipe Name"
              {...register("name")}
              className="input input-bordered w-full "
            />
          </label>

          <div className="flex gap-6">
            {/* category */}
            <label className="form-control w-full  my-6">
            <select
                  defaultValue="default"
                  {...register("category")}
                  className="select select-bordered w-full max-w-xs"
                >
                  <option disabled value="default">
                    Select a category
                  </option>
                  <option value="salad">Salad</option>
                  <option value="pizza">Pizza</option>
                  <option value="soup">Soup</option>
                  <option value="dessert">Dessert</option>
                  <option value="drinks">Drinks</option>
                </select>
            </label>

            {/* price */}

            <label className="form-control w-full  my-6">
            <div className="label">
              <span className="label-text">Price name*</span>
            </div>
            <input
              type="number"
              placeholder="Price"
              {...register("price")}
              className="input input-bordered w-full max-w-xs"
            />
          </label>


          </div>

          <textarea  {...register("recipe")} className="textarea textarea-bordered w-full mt-4" placeholder="Bio"></textarea>

          <div className="form-control w-full  my-6">
          <input  {...register("image")} type="file" className="file-input file-input-bordered w-full max-w-xs" />
          </div>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Additems;
