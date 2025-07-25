import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaCalendarAlt, FaRegEye, FaShareAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoBagOutline } from "react-icons/io5";

const Card = ({ article }) => {
    const { image, compony, description, status, location, author, title, date, type } = article

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <div className=" rounded-lg overflow-hidden shadow-md border border-secondary-color bg-white mb-5">
                {/* Image */}
                {
                    image && <img
                        src={image} // Replace with actual image URL
                        alt="Forest"
                        className="w-full h-56 object-cover"
                    />
                }

                {/* Content */}
                <div className="p-4 space-y-2">
                    <span className="text-sm text-gray-600">{type}</span>
                    <div className="flex items-start  justify-between lg:gap-20 md:gap-10 gap-5">
                        <h2 className="lg:text-xl md:text-lg text-base font-bold text-gray-900 leading-snug">
                            {title}
                        </h2>
                        <div className="relative">
                            <button className="text-2xl pt-0 hover:cursor-pointer" onClick={() => setIsOpen(!isOpen)}><BsThreeDots /></button>

                            {
                                isOpen && <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded shadow-md z-10">
                                <ul className="py-1 text-sm text-gray-700">
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Edit</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Report</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 3</li>
                                </ul>
                            </div>
                            }
                        </div>

                    </div>
                    <p className="text-gray-600 text-sm line-clamp-1">
                        {description}
                    </p>

                    {/* location */}

                    <div className="flex gap-7">
                        {
                            date && <p className="lg:text-base text-[12px] font-medium text-primary-color flex items-center gap-2"><FaCalendarAlt />{date}</p>
                        }
                        {
                            compony && <p className="lg:text-base text-[12px] font-medium text-primary-color flex items-center gap-2"> <IoBagOutline />{compony}</p>
                        }

                        <p className="lg:text-base text-[12px] font-medium text-primary-color flex items-center gap-2"> <FaLocationDot />{location}</p>
                    </div>

                    {
                        status && <button className={`${status == 'Visit Website' ? 'text-red-500' : status == 'Apply on Timesjobs' ? 'text-green-700' : 'text-primary-color'} w-full border p-2 rounded-md border-secondary-color hover:cursor-pointer hover:bg-gray-200`}>{status}</button>
                    }

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-3">
                        {/* Author */}
                        <div className="flex items-center space-x-2">
                            <img
                                src={author?.avatar}
                                alt="Sarthak Kamra"
                                className="w-8 h-8 rounded-full"
                            />
                            <span className="text-sm font-medium text-gray-800">{author?.name}</span>
                        </div>

                        {/* Views and Share */}
                        <div className="flex items-center space-x-3 text-gray-500 text-sm">
                            <div className="flex items-center gap-1">
                                <FaRegEye className="w-4 h-4" />
                                <span>1.4k views</span>
                            </div>
                            <FaShareAlt className="w-4 h-4 cursor-pointer hover:text-gray-700" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;