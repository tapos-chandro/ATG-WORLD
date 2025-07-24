

const Banner = () => {
    return (
        <div
            className="relative -z-0 lg:bg-[url('/src/assets/bg-2.png')] bg-[url('../../src/assets/phone-banner.jpg')] lg:bg-cover lg:bg-center bg-cover bg-center  bg-no-repeat  w-full lg:h-[27.5rem] h-[236px] "
        >
            <div className="w-full h-full absolute bg-[#00000084] -z-10"></div>
            <div className="flex flex-col justify-end lg:py-20 py-8 h-full text-white px-5 max-w-[1040px] mx-auto ">
                {/* Your content here */}
                <h1 className="lg:text-4xl md:text-2xl text-[11px] font-bold mb-2">Computer Engineering</h1>
                <p className="lg:text-lg md:text-base text-[8px]">142,765 Computer Engineers follow this</p>
            </div>
        </div>

    );
};

export default Banner;