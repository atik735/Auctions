import React from 'react';

const Footer = () => {
    return (
<footer className="footer footer-horizontal footer-center bg-white text-base-content rounded p-20 gap-y-6">

        <div>
        <h2 className='font-medium text-3xl text-[#003EA4]'>Auction<span className="text-[#FFD337] font-black">Gallery</span></h2>
        <div className='text-lg font-medium'>
        <span>Bid.</span>
        <span>Win.</span>
        <span>Own.</span>
        </div>
        </div>

  <nav className="grid grid-flow-col gap-4 text-base text-black">
    <a className="link link-hover">Home</a>
    <a className="link link-hover">Auctions</a>
    <a className="link link-hover">Categories</a>
    <a className="link link-hover">How to works</a>
  </nav>
  <aside className='text-base font-medium'>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>
    );
};

export default Footer;