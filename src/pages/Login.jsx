import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import loginImage from '../../src/assets/login-image.png'
import { Link } from "react-router";

const Login = ({ toggle, setToggle }) => {

    const [showPassword, setShowPassword] = useState(false);
    return (
        <div>

            {
                toggle === true ? <div role="dialog" aria-modal="true" aria-labelledby="dialog-title" className="relative ">
                    <div aria-hidden="true" className="fixed inset-0 bg-[#0000006b] transition-opacity"></div>

                    <div className="fixed inset-0  z-10 overflow-auto ">
                        <div className="flex mt-20 mb-10 items-end justify-center lg:p-4 text-center sm:items-center sm:p-0">
                            <div className="relative rounded-lg  bg-white text-left shadow-xl transition-all sm:my-8 p-5 ">
                                <div className=" block lg:hidden md:hidden">
                                    <div className="flex justify-between w-full items-center">
                                        <h1 className="text-2xl font-bold text-gray-900">Welcome back!</h1>
                                        <div className="bg-black h-2 w-2 rounded-full p-3 flex justify-center items-center">
                                            <button className="z-50 rounded-full mb-1 text-white bg- text-lg flex items-center justify-center " onClick={() => setToggle(false)}>x</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-baseline mb-8">
                                    <h1 className="text-3xl font-bold text-gray-900 hidden lg:block md:block">Sign In</h1>

                                    <p className="text-sm lg:block md:block hidden">
                                        Don't have an account yet?
                                        <Link to={"/signup"} className="font-semibold text-blue-600 hover:underline">
                                            Create new for free!
                                        </Link>
                                    </p>
                                </div>


                                <div className="w-full flex flex-col md:flex-row  ">

                                    {/* Left Side: Form */}
                                    <div className="w-full md:w-1/2 ">


                                        <form>
                                            {/* Email Input */}
                                            <div className="mb-5">
                                                <input
                                                    type="email"
                                                    placeholder="Email"
                                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                                                />
                                            </div>

                                            {/* Password Input */}
                                            <div className="relative mb-6">
                                                <input
                                                    type={showPassword ? 'text' : 'password'}
                                                    placeholder="Password"
                                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500 hover:text-gray-700"
                                                >
                                                    {showPassword ? (
                                                        <AiOutlineEyeInvisible size={22} />
                                                    ) : (
                                                        <AiOutlineEye size={22} />
                                                    )}
                                                </button>
                                            </div>

                                            {/* Sign In Button */}
                                            <div>
                                                <button
                                                    type="submit"
                                                    className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                                                >
                                                    Sign In
                                                </button>
                                            </div>
                                        </form>

                                        {/* Social Login Buttons */}
                                        <div className="mt-6 space-y-4">
                                            <button className="w-full flex items-center justify-center py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-200">
                                                <FaFacebook className="text-blue-700 mr-3" size={24} />
                                                <span className="font-semibold text-gray-700">Sign in with Facebook</span>
                                            </button>

                                            <button className="w-full flex items-center justify-center py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-200">
                                                <FcGoogle className="mr-3" size={24} />
                                                <span className="font-semibold text-gray-700">Sign in with Google</span>
                                            </button>
                                        </div>

                                        {/* Forgot Password Link */}
                                        <div className="mt-8 text-center">
                                            <a href="#" className="text-sm font-medium text-blue-600 hover:underline">
                                                Forgot Password?
                                            </a>
                                        </div>
                                    </div>

                                    {/* Right Side: Illustration */}
                                    <div className="hidden md:flex  items-center justify-center  p-12">
                                        <img
                                            src={loginImage}
                                            alt="Social interaction illustration"
                                            className="w-full h-auto object-contain"
                                        />
                                    </div>
                                </div>
                                <div className="hidden lg:block md:block">
                                    <div className="absolute z-50 lg:-top-8 md:-top-8 top-1  p-3 lg:-right-6 md:-right-4   h-4 w-4 flex items-center justify-center rounded-full  lg:bg-white md:bg-white bg-black ">

                                        <button className="z-50 rounded-full lg:text-gray-700 md:text-gray-700 mb-1 text-white text-lg flex items-center justify-center" onClick={() => setToggle(false)}>x</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> : ''
            }
        </div>
    );
};

export default Login;