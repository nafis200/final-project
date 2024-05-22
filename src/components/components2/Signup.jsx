import { useContext } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "./Authprovider";
import Swal from 'sweetalert2'
import useAxiospublic from "../../components1/hooks/useAxiospublic";
const Signup = () => {

  const {createUser} = useContext(AuthContext)
  const axiosPublic = useAxiospublic()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

    const onSubmit = (data) => {
       console.log(data);
       createUser(data.email,data.password)
       .then(result =>{

         const userinfo = {
             name: data.name,
             email: data.email
         }

         axiosPublic.post('/users',userinfo)
         .then(res => {
             if(res.data.insertedId){
             
              Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success",
                showConfirmButton: false,
                timer: 2000
              });

             }
         })


         const loggedUser = result.user
         console.log(loggedUser);
    
       })
       .catch(error=>{
         console.log(error)
       })
    }

  


 

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign up now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="enter your name"
                className="input input-bordered"
                name="name"
               
              />
              {errors.name && <span className="text-red-600">This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })} 
                placeholder="email"
                className="input input-bordered"
                name="email"
               
              />
              {errors.email && <span className="text-red-600">email is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password",  { required: true, minLength:6, maxLength:20,pattern: /^(?=.*[a-z])(?=.*[A-Z]).+$/ })} 
                placeholder="password"
                className="input input-bordered"
                name="password"
               
              />
              {errors.password?.type === 'required' && <span className="text-red-600">password is required</span>}
              {errors.password?.type === 'minLength' && <span className="text-red-600">Password should be six character</span> }
              {errors.password?.type === 'maxLength' && <span className="text-red-600">Password less tahn 20 character</span> }
              {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case.</p>}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Sign up" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
