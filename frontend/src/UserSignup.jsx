import { Link, useNavigate } from 'react-router'
import { FaGoogle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { useForm } from "react-hook-form"


const UserSignup = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();


  async function FormSubmit(formData) {
  if(!formData)return ;
  alert("Form submited ")
  reset();
  }



  return (
    <>
      <div className="min-h-screen w-full flex items-center">
        <div className="max-w-7xl mx-auto w-full flex md:flex-row flex-col">

          {/* LEFT IMAGE */}
          <div className="flex-1 flex justify-center items-center p-6">
            <div className="relative w-full max-w-[500px]">
              <img src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=576/height=576/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy85NjRkZDNkMS05NGU3LTQ4MWUtYjI4Yy0wOGQ1OTM1M2I5ZTAucG5n"
                alt="signup" className="w-full rounded-lg" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent rounded-lg"></div>
              <div className="absolute bottom-0 text-white p-6">
                <h1 className="text-xl sm:text-2xl font-semibold leading-snug">
                  Welcome User One Step to join 80M family
                  <FaArrowRightLong size={24} className="inline-block ml-3" />
                </h1>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="flex-1 flex flex-col justify-center px-6 sm:px-10 md:px-12 py-6"
            >
            <h3 className="text-3xl sm:text-4xl font-medium text-center mb-10">Sign Up</h3>

            <form className="flex flex-col max-w-md mx-auto w-full" onSubmit={handleSubmit(FormSubmit)}>
              <div className="flex flex-col md:flex-row gap-4 mb-5">
                <div className="flex-1">
                  <label className="font-medium">Enter your firstname:</label>
                  <input type="text" className="mt-2 h-12 w-full bg-[#eeeeee] px-3 rounded-lg"
                    {...register("fullname.firstname", { required: "This field is required" })} />
                  <p className='text-red-600'>{errors.fullname?.firstname?.message}</p>
                </div>
                <div className="flex-1">
                  <label className="font-medium">Enter your lastname:</label>
                  <input type="text" className="mt-2 h-12 w-full bg-[#eeeeee] px-3 rounded-lg"
                    {...register("fullname.lastname", { required: "This field is required" })} />
                  <p className='text-red-600'>{errors.fullname?.lastname?.message}</p>
                </div>
              </div>

              <div className="mb-5">
                <label htmlFor="email" className="font-medium">Enter your email:</label>
                <input type="email" id="email" className="mt-2 h-12 w-full bg-[#eeeeee] px-3 rounded-lg"
                  {...register("email", { required: "This field is required" })} />
                <p className='text-red-600'>{errors.email?.message}</p>
              </div>

              <div className="mb-6">
                <label htmlFor="password" className="font-medium">Enter your password:</label>
                <input type="password" id="password" className="mt-2 h-12 w-full bg-[#eeeeee] px-3 rounded-lg"
                  {...register("password", {
                    required: "This field is required",
                    minLength: { value: 8, message: "Password must be 8 characters long" }
                  })} />
                <p className='text-red-600'>{errors.password?.message}</p>
              </div>

              <button className="hover:cursor-pointer w-full py-3 rounded-lg bg-black text-white font-medium hover:opacity-90 transition">
                Sign up
              </button>

              <p className="text-center flex justify-center gap-2 mt-4 mb-6 flex-wrap">
                Already have an account?
                <Link to={"/"} className="text-blue-600">Login here</Link>
              </p>

              <div className="border border-black mb-6 relative after:content-['or'] after:absolute after:bg-white after:px-2 after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2"></div>

              {/* Google Signup */}
              <button type="button" 
                className="w-full hover:cursor-pointer py-3 rounded-lg border flex justify-center items-center gap-2 hover:bg-black hover:text-white transition">
                <FaGoogle size={16} />
                Continue with Google
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSignup;