import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from './Authprovider';
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

  // const captchaRef = useRef(null)
  const [disabled,setDisabled] = useState(true)

  const {signInUser} = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate();
  
  const from = location.state?.from?.pathname || "/";
 
  useEffect(()=>{
    loadCaptchaEnginge(6)
  },[])


  const handleSubmit = e =>{
        e.preventDefault()
        const form = event.target 
        const email = form.email.value 
        const password = form.password.value
        signInUser(email,password)
        .then(result =>{
            const user = result.user 
            console.log(user);
            Swal.fire({
              title: "Good job!",
              text: "You clicked the button!",
              icon: "success"
            });
            navigate(from,{replace:true})
        })
  }

  const handleValidate = (e) =>{
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
  }
  else {
      setDisabled(true)
  }

     
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col md:flex-row-reverse">
        <div className="text-center lg:text-left md:w-1/2">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 md:w-1/2 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
              
            </div>
            <div className="form-control">
              <label className="label">
              <LoadCanvasTemplate />  
              </label>
              {/* <input
                
                type="text"
                onBlur={handleValidate}
                placeholder="write the captcha"
                className="input input-bordered"
                name="captcha"
                // ref = {captchaRef}
                required
              /> */}
              <input onBlur={handleValidate} type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered" />

              <br />
              {/* <button className='btn btn-outline'>Validate</button> */}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
