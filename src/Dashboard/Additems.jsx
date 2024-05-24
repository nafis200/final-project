import Sectiontitle from "../components/Sectiontitle";
import { useForm } from "react-hook-form";

const Additems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data)
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
                  {...register("category")}
                  className="select select-bordered w-full max-w-xs"
                >
                  <option disabled selected>
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
