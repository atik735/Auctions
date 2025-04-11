import React from 'react';

const Banner = () => {
    return (
<div className="bg-[url('/banner.png')] bg-cover rounded-sm bg-no-repeat bg-center h-[600px] w-full">

        <div className='flex flex-col pl-40 justify-center h-full space-y-4'>
            <h1 className='font-semibold text-[40px] leading-tight text-white'>Bid on Unique Items from <br />Around the World</h1>
            <p className='text-lg text-[#dddbdb]'>Discover rare collectibles, luxury goods, and vintage <br />treasures in our curated auctions</p>
           <div> <button className='bg-white font-medium p-2 px-4 cursor-pointer rounded-4xl'>Explore Auctions</button></div>
        </div>

</div>
);
};

export default Banner;