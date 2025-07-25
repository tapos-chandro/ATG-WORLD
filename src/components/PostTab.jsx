import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FaUser } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";
import Card from './Card';

import image1 from '../../src/assets/Rectangle-1.png'
import image2 from '../../src/assets/Rectangle-2.png'
import image3 from '../../src/assets/Rectangle-3.png'
import author1 from '../../src/assets/author-1.png'
import author2 from '../../src/assets/author-2.png'
import author3 from '../../src/assets/author-3.png'
import { useState } from 'react';

const PostTab = () => {

    const [category, setCategory] = useState('All')
    const [isOpen, setIsOpen] = useState(false)


    const articles = [
        {
            id: 1,
            type: "✍️ Article",
            title: "What if famous brands had regular fonts? Meet RegulaBrands!",
            description:
                "I’ve worked in UX for the better part of a decade. From now on, I plan to reinvent how we look at design simplicity...",
            author: {
                name: "Sarthak Kamra",
                avatar: author1,
            },
            image: image1,
            views: "1.4k",
        },
        {
            id: 2,
            type: "🔬️ Education",
            title: "Tax Benefits for Investment under National Pension Scheme launched by Government",
            description:
                "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
            author: {
                name: "Sarah West",
                avatar: author2,
            },
            image: image2,
            views: "960",
        },
        {
            id: 3,
            type: "🗓️ Meetup",
            title: "Finance & Investment Elite Social Mixer @Lujiazui",
            author: {
                name: "Ronal Jones",
                avatar: author3,
            },
            location: 'Ahmedabad, India',
            date: 'Fri, 12 Oct, 2018',
            image: image3,
            views: "2.1k",
            status: 'Visit Website'
        },
        {
            id: 3,
            type: "💼️ Job",
            title: "Software Developer",
            author: {
                name: "Ronal Jones",
                avatar: author3,
            },
            location: ' Ahmedabad, India',
            compony: 'Innovaccer Analytics Private Ltd.',
            views: "2.1k",
            status: 'Apply on Timesjobs'
        },
    ];




    const filterArticle = articles.filter(article => article.type.includes("Article"))
    const filterEducations = articles.filter(article => article.type.includes("Education"))
    const filterMeetUp = articles.filter(article => article.type.includes("Meetup"))
    const filterJobs = articles.filter(article => article.type.includes("Job"))
    
 const categoryData = [
  { label: 'All', count: articles.length },
  { label: 'Article', count: filterArticle.length },
  { label: 'Event', count: filterMeetUp.length },
  { label: 'Education', count: filterEducations.length },
  { label: 'Jobs', count: filterJobs.length },
];



        const [isPosts, setIsPost] = useState(articles.length)


    return (
        <div className=' max-w-[1040px] mx-auto  mt-5'>
            <Tabs className='w-full'>
                 <div className='block md:hidden lg:hidden '>
                        <div className='flex justify-between w-full p-3 items-center'>
                            <div>
                                <h1 className='font-medium text-base flex items-center'>Posts ({isPosts})</h1>
                            </div>
                            <TabList className=" react-tabs__tab--selected react-tabs__tab--disabled  gap-4 relative ">
                                <button onClick={() => setIsOpen(!isOpen)} className="flex pb items-center px-4 py-2 border border-gray-300 rounded-md bg-secondary-color text-black font-medium hover:bg-gray-100">
                                    Filter : {category}
                                    <IoChevronDown className="ml-2 text-gray-600" />
                                </button>
                               {isOpen && <div className='bg-white p-5 text-black absolute w-36 right-0 z-50 '>
         
                                    {
                                        categoryData.map((category, index) => <Tab key={index} onClick={() =>{setIsOpen(!isOpen), setCategory(category.label), setIsPost(category.count)}} className=" border-0 focus: outline-0  hover:cursor-pointer text-base py-5 ">{category.label}</Tab>)
                                    }
                                </div>}
                            </TabList>

                        </div>
                    </div>
                <div className='flex justify-between items-center '>

                    <div className='hidden md:block lg:block'>
                        <TabList className="flex react-tabs__tab--selected react-tabs__tab--disabled border-b gap-4">
                            {
                                categoryData.map(category => <Tab className="border-0 focus:outline-0 hover:cursor-pointer text-base py-5 ">{category.label} Posts ({ category.count })</Tab>)
                            }
                            {/* <Tab className=" border-0 focus: outline-0  hover:cursor-pointer text-base py-5 ">Article({filterArticle.length})</Tab>
                            <Tab className=" border-0 focus: outline-0  hover:cursor-pointer text-base py-5 ">Event({filterMeetUp.length})</Tab>
                            <Tab className=" border-0 focus: outline-0  hover:cursor-pointer text-base py-5 ">Education({filterEducations.length})</Tab>
                            <Tab className=" border-0 focus: outline-0  hover:cursor-pointer text-base py-5 ">Job({filterJobs.length})</Tab> */}
                        </TabList>
                    </div>
                   

                    <div className='hidden lg:inline-block md:inline-block'>
                        <div className="flex space-x-2">
                            {/* Write a Post Button */}
                            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white text-black font-medium hover:bg-gray-100">
                                Write a Post
                                <IoChevronDown className="ml-2 text-gray-600" />
                            </button>

                            {/* Join Group Button */}
                            <button className="flex items-center px-4 py-2 bg-[#1877F2] text-white font-medium rounded-md hover:bg-[#166fe0]">
                                <FaUser className="mr-2" />
                                Join Group
                            </button>
                        </div>
                    </div>
                </div>
                <hr className='text-secondary-color'></hr>


                <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-20 my-5'>
                    <div className='col-span-2 '>
                        <TabPanel >
                            {
                                articles?.map(article => <Card key={article?.id} article={article}></Card>)
                            }
                            
                        </TabPanel>
                        <TabPanel >
                            {
                                filterArticle?.map(article => <Card key={article?.id} article={article}></Card>)
                            }
                        </TabPanel>
                        <TabPanel >
                            {
                                filterMeetUp?.map(article => <Card key={article?.id} article={article}></Card>)
                            }
                        </TabPanel>
                        <TabPanel >
                            {
                                filterEducations?.map(article => <Card key={article?.id} article={article}></Card>)
                            }
                        </TabPanel>
                        <TabPanel >
                            {
                                filterJobs?.map(article => <Card key={article?.id} article={article}></Card>)
                            }
                        </TabPanel>
                    </div>
                    <div className='col-span-1 bg-red-400 hidden lg:block md:block'>
                        <h1>Tapos</h1>
                    </div>
                </div>
            </Tabs>

        </div>
    );
};

export default PostTab;