import { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../Services/apiService";
import Loader from "../../components/Loader";
import { ToastContainer,toast } from "react-toastify";
import { setToken } from "../../helper/tokenHelper";
import { UserContext } from "../../context/userContext";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loader, setloader] = useState(false);
  const formTag= useRef(null)
  const navigate=useNavigate(null)
  const{login}=useContext(UserContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
 
    try {
      setloader(true)
      const res= await loginUser(data)
      console.log(res)
      const user= res.data.user
      const token=res.data.token
      setloader(false)
        formTag.current.reset()
          toast.dismiss()
            toast.success('User Login successfull',{
              position:'top-center',
            })
            setToken(token)
            login(user)
            navigate('/')
      
    } catch (error) {
      console.log(error)
       toast.dismiss()
            toast.error(error?.response?.data?.message,{
              position:'top-center',
            })
      setloader(false)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md transform transition duration-300 ease-in-out">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
          Login
        </h2>

        <form ref={formTag} onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full p-4 py-2.5 border border-gray-100 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", { required: "Password is required" })}
              className="w-full p-4 py-2.5 border border-gray-100 rounded-xl shadow-md pr-10 focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Enter your password"
            />
            <div
              className="absolute top-11 right-3 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loader}
            className="w-full bg-red-600 text-white flex items-center justify-center py-2.5 border border-white hover:border-red-600 cursor-pointer rounded-xl  transform hover:text-red-600 hover:bg-white transition duration-300 ease-in-out"
          >
            {
              loader ? <Loader/> : 'Login'
            }
           
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm">
            Don't have an account?{" "}
            <Link to="/register" className="text-red-600 font-medium">
              Register here
            </Link>
          </p>
          <p className="text-sm mt-2">
            <Link to="/forgot-password" className="text-red-600 font-medium">
              Forgot Password?
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
