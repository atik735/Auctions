import React from 'react';

const Navbar = () => {
    return (

        <div className='max-w-screen-2xl mx-auto py-3 px-5'>
            <nav className='flex justify-between items-center'>
                <h2 className='font-medium text-2xl text-[#003EA4]'>Auction<span className="text-[#FFD337] font-black">Gallery</span></h2>
                <ul className='flex gap-8'>
                    <li><a>Home</a></li>
                    <li><a>Auctions</a></li>
                    <li><a>Categories</a></li>
                    <li><a>How to works</a></li>
                </ul>
                <div className='space-x-2'>
                <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
        <span className="badge badge-sm indicator-item">8</span>
      </div>
    </button>

    <div className="avatar">
  <div className="w-12 rounded-full">
    <img src={"https://i.ibb.co.com/pBnw8G14/logoprof.png"} />
  </div>
</div>
  </div>
            </nav>
        </div>

    );
};

export default Navbar;