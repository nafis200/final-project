
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../components1/hooks/useAuth";
import useAxiospublic from "../../components1/hooks/useAxiospublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {signIngoogle} = useAuth()
    const axiosPublic = useAxiospublic()
    const navigate = useNavigate()
    const handleGoogleSignIn = ()=>{
          signIngoogle()
          .then(result =>{
            console.log(result.user)
            const userInfo = {
                 email: result.user?.email,
                 name: result.user?.displayName
            }
            axiosPublic.post('/users',userInfo)
            .then(res => {
                console.log(res.data)
                navigate('/')
            })
          })
    }

    return (
        <div>
            <div className=" mb-5 ml-6">
               <button onClick={handleGoogleSignIn} className="btn w-[150px] bg-black text-red-500"> <FaGoogle className=""></FaGoogle></button>
            </div>
        </div>
    );
};

export default SocialLogin;