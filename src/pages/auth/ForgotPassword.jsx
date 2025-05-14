import { useForm } from "react-hook-form";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Password reset email sent to:", data.email);
  
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300 p-4">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md transform hover:scale-105 transition duration-300 ease-in-out">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
          Forgot Password
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
              className="w-full p-4 border border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-xl shadow-md transform hover:scale-105 transition duration-300 ease-in-out"
          >
            Send Password Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
