import { Link } from 'react-router';
import logo from '../../src/assets/logo.png'

const NavBar = ({ setToggle }) => {
    return (
        <div className=" shadow-sm bg-white">
            <nav className="lg:max-w-[1400px] mx-auto px-4 py-2 flex items-center justify-between ">
                {/* Logo */}
                <div className="text-xl font-semibold text-green-600 flex items-center space-x-1">
                    <Link href='/'><img src={logo} alt="" /></Link>
                </div>

                {/* Search Bar */}
                <div className="hidden sm:flex flex-1 justify-center px-4">
                    <input
                        type="text"
                        placeholder="Search for your favorite groups in ATG"
                        className="w-full max-w-md px-4 py-1.5 rounded-full bg-gray-100 focus:outline-none"
                    />
                </div>

                {/* Create Account */}
                <div className="text-sm text-right text-gray-700">
                    <span>Create account. </span>
                    <button onClick={() => setToggle(true)}><span className="text-blue-600 font-semibold cursor-pointer">
                        It’s free!
                    </span>
                        <span className="ml-1">▼</span></button>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
