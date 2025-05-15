import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../Services/apiService";
import Loader from "../../components/Loader";
import { toast, ToastContainer } from "react-toastify";


export default function RegistrationForm() {
  
const servicesList = [
  "Chemicals Buy",
  "Chemicals Sell",
  "Logisticts Service"
];
const navigate= useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [loader, setloader] = useState(false);
  const formTag= useRef(null)

  const onSubmit = async(data) => {
    console.log("Registration Data:", data);
    setloader(true)
  try {
     const res= await  registerUser(data)
    setloader(false)
    formTag.current.reset()
    toast.dismiss()
      toast.success('User registered successfully',{
        position:'top-center',
      })
      navigate('/login')
  } catch (error) {
     setloader(false)
      toast.dismiss()
      toast.error('Something went wrong!',{
        position:'top-center',
      })
    console.log(error)
  }
   
  };

  return (
    <form
    ref={formTag}
      onSubmit={handleSubmit(onSubmit)}
      className="w-full  justify-center items-start mx-auto p-6 gap-10  bg-white shadow-md rounded-xl flex max-lg:block"
    >
      {/* Personal Details */}
      <div className="">
        <h2 className="text-xl font-semibold mb-4">Personal Details</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
          <input
            type="text"
            {...register("firstName", { required: "First name is required" })}
            className="w-full px-3 py-2 border border-gray-300 rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
          <input
            type="text"
            {...register("lastName", { required: "Last name is required" })}
            className="w-full px-3 py-2 border border-gray-300 rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="w-full px-3 py-2 border border-gray-300 rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
          <input
            type="tel"
            {...register("phone", { required: "Phone number is required" })}
            className="w-full px-3 py-2 border border-gray-300 rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-red-600"
            placeholder=""
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
        </div>
      </div>

      {/* Password Field */}
      <div className="mt-4 relative">
        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
        <input
          type={showPassword ? "text" : "password"}
          {...register("password", { required: "Password is required" })}
          className="w-full px-3 py-2 border border-gray-300 rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <div
          className="absolute top-9 right-4 cursor-pointer text-gray-500"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </div>
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
      </div>
      </div>
{/* <ToastContainer/> */}
      {/* Business Details */}
<div className="max-lg:mt-6">
        <h2 className="text-xl font-semibold  mb-4">Business Details</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Select Your Service</label>
        <select
          {...register("service", { required: "Service selection is required" })}
          className="w-full px-3 py-2 border border-gray-300 rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-red-600"
        >
          <option value="">-- Select a service --</option>
          {servicesList.map((service, idx) => (
            <option key={idx} value={service}>
              {service}
            </option>
          ))}
        </select>
        {errors.service && <p className="text-red-500 text-sm">{errors.service.message}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1 ">Company Name</label>
          <input
            type="text"
            {...register("companyName", { required: "Company name is required" })}
            className="w-full px-3 py-2 border border-gray-300 rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          {errors.companyName && <p className="text-red-500 text-sm">{errors.companyName.message}</p>}
        </div>

        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Company Address</label>
          <input
            type="text"
            {...register("companyAddress", { required: "Company address is required" })}
            className="w-full px-3 py-2 border border-gray-300 rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          {errors.companyAddress && <p className="text-red-500 text-sm">{errors.companyAddress.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Pincode</label>
          <input
            type="text"
            {...register("pincode", { required: "Pincode is required" })}
            className="w-full px-3 py-2 border border-gray-300 rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          {errors.pincode && <p className="text-red-500 text-sm">{errors.pincode.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
          <input
            type="text"
            {...register("city", { required: "City is required" })}
            className="w-full px-3 py-2 border border-gray-300 rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
          <input
            type="text"
            {...register("state", { required: "State is required" })}
            className="w-full px-3 py-2 border border-gray-300 rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          {errors.state && <p className="text-red-500 text-sm">{errors.state.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
          <input
            type="text"
            {...register("country", { required: "Country is required" })}
            className="w-full px-3 py-2 border border-gray-300 rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          {errors.country && <p className="text-red-500 text-sm">{errors.country.message}</p>}
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-6">
        <button
          type="submit"
          disabled={loader}
          className="w-full bg-red-600 relative flex items-center justify-center text-white font-semibold cursor-pointer py-3 px-6 rounded-xl hover:bg-red-500 transition focus:outline-none focus:ring-2 focus:ring-red-600"
        >
          {
            loader ? <Loader/> : "Register"
          
          }
        </button>
      </div>

      {/* Already Registered Link */}
      <p className="mt-4 text-sm text-center text-gray-600">
        Already registered?{" "}
        <Link to="/login" className="text-red-600 hover:underline">
          Login here
        </Link>
      </p>
</div>
    </form>
  );
}
