import Sectiontitle from "../components/Sectiontitle";
import { useForm } from "react-hook-form";

const Additems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {};
  return (
    <div>
      <Sectiontitle
        heading="add an items"
        subHeading="whats new"
      ></Sectiontitle>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name")} />
          <select {...register("category")} className="select select-bordered w-full max-w-xs"> 
            <option disabled selected>
             Select a category
            </option>
            <option value="salad">Salad</option>
            <option value="pizza">Pizza</option>
            <option value="soup">Soup</option>
            <option value="dessert">Dessert</option>
            <option value="drinks">Drinks</option>
          </select>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Additems;
