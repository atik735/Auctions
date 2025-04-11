import React from 'react';
import { FaHeart } from "react-icons/fa6";
const Auction = ({auction,handleFavourite}) => {
    return (
        <>
      <tr className='border-b border-black'>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask h-16 w-16">
                <img
                 src={auction.image}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{auction.title}</div>
            </div>
          </div>
        </td>
        <td>
        ${auction.currentBidPrice}
        </td>
        <td>{auction.timeLeft}</td>
        <td><button className='p-4 cursor-pointer' id={auction.id} onClick={() => handleFavourite(auction)}><FaHeart size={25}/></button></td>
      </tr>
        </>
        
    );
};

export default Auction;