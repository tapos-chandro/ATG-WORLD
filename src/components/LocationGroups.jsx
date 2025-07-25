import { useState } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { RxCross2 } from 'react-icons/rx';
import author4 from '../../src/assets/author-4.png'
import author5 from '../../src/assets/author-5.jpg'
import author6 from '../../src/assets/author-6.png'
import author7 from '../../src/assets/author-7.png'


const LocationGroups = () => {
    const [location, setLocation] = useState('');
    const [groups, setGroups] = useState([
        { name: 'Leisure', followed: false, image: author4 },
        { name: 'Activism', followed: false, image: author5 },
        { name: 'MBA', followed: false, image: author6 },
        { name: 'Philosophy', followed: false, image: author7 }
    ]);

    const toggleFollow = (index) => {
        const updatedGroups = [...groups];
        updatedGroups[index].followed = !updatedGroups[index].followed;
        setGroups(updatedGroups);
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg ">
            {/* Location Section */}
            <div className="mb-8 flex items-center w-full p-3 gap-2 border-gray-300 border-0 border-b-2 rounded-md focus:outline-none  ">
                <FaLocationDot className='left-0 right-4 ' />
                <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter your location"
                    className='focus:outline-0'
                />
                <RxCross2 />
            </div>

            <div className="border-t border-gray-200 my-6"></div>

            {/* Recommended Groups Section */}
            <div>
                <div className=" items-center mb-4">
                    
                    <div className='flex items-start gap-2 my-10'>
                        <span className="  rounded-full  h-3 w-3 px-2 py-2 justify-center  ring-2 text-gray-600 ring-gray-600 mt-1 flex items-center">!</span>
                        <p className='text-[12px]'>Your location will help us serve better and extend a personalised experience.</p>
                    </div>
                    <h2 className="text-lg font-normal text-gray-800">👍 Ecommended Groups</h2>
                </div>

                <div className="space-y-3">
                    {groups.map((group, index) => (
                        <div
                            key={group.name}
                            className="flex justify-between items-center py-4 rounded-lg transition-colors"
                        >
                            <div className='flex  gap-2 items-center'>
                                <img src={group.image} className='rounded-full w-10 h-10' alt="" />
                                <span className="font-normal text-base text-gray-700">{group.name}</span>
                            </div>
                            <button
                                onClick={() => toggleFollow(index)}
                                className={`px-4 py-2 rounded-full text-sm hover:cursor-pointer font-medium transition-colors ${group.followed
                                    ? 'bg-gray-200 text-gray-700'
                                    : 'bg-blue-500 text-white hover:bg-blue-600'
                                    }`}
                            >
                                {group.followed ? 'Following' : 'Follow'}
                            </button>
                        </div>
                    ))}
                </div>

                <div className='flex justify-end'>
                    <button className="mt-4  text-blue-500 text-sm font-medium hover:text-blue-700">
                        See More...
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LocationGroups;