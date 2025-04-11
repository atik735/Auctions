import React, { useEffect, useState } from "react";
import Auction from "./Auction";
import { FaRegHeart } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';

const Auctions = () => {
  const [favourite, setFavourite] = useState([]);
  const [auctions, setAuctions] = useState([]);
  const [bit, setBid] = useState(0);

  const handleFavourite = (auction) => {
    setFavourite([...favourite, auction]);
    setBid(bit + auction.currentBidPrice);

    const selectedBtn = document.getElementById(auction.id);
    selectedBtn.classList.remove('cursor-pointer');
    selectedBtn.classList.add('text-red-500','cursor-not-allowed')
    selectedBtn.setAttribute('disabled',true)

    toast('Items Added to your Favourite Lists');
  };
  // console.log(bit);


  useEffect(() => {
    fetch("auction.json")
      .then((res) => res.json())
      .then((data) => setAuctions(data));
  }, []);

  const handleRemoveBit = (fav) => {
    const remainingBit = favourite.filter((bit) => bit.id !== fav.id);

    setFavourite(remainingBit);

    setBid(bit - fav.currentBidPrice);

    const removeBtn = document.getElementById(fav.id);

    removeBtn.classList.remove('text-red-500','cursor-not-allowed')
    removeBtn.classList.add('cursor-pointer');
    removeBtn.removeAttribute('disabled',true)
    toast("Items Removed From Favourite Lists")

  };

  // console.log(favourite);

  // console.log(auctions);

  return (
    <section className="bg-[#EBF0F5] py-16 px-5">
      <div className="max-w-screen-2xl mx-auto">
        <div className="space-y-2">
          <h1 className="font-medium text-3xl text-[#0E2954]">
            Active Auctions
          </h1>
          <p>Discover and bid on extraordinary items</p>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto flex gap-10">

{/* ------------------------------------------------------------- */}



        <table className="table h-full bg-white w-5/7 my-5">
    <thead>
      <tr className="text-base text-black border-b border-black">
        <th>Items</th>
        <th>Current Bid</th>
        <th>Time Left</th>
        <th>Bid Now</th>
      </tr>
    </thead>
    <tbody>
    {auctions.map((auction) => (
            <Auction
              key={auction.id}
              handleFavourite={handleFavourite}
              auction={auction}
            ></Auction>
          ))}
</tbody>
</table>

{/* ------------------------------------ */}
        <div className="w-2/7 rounded-xl my-5">
          <div className="bg-white p-10 rounded-2xl">
            <button className="place-self-center flex items-center text-xl font-bold py-2">
              <FaRegHeart size={25} />
              Favourite Items
            </button>

            <div className="border-y py-4 ">
              {favourite.length === 0 ? (
                <div className="text-center">
                  <h1 className="text-lg mb-2 font-semibold">
                    No Favourites yet
                  </h1>
                  <p>
                    Click the heart icon on any item to add it to your favorites
                  </p>
                </div>
              ) : (
                favourite.map((fav) => (
                  <div
                    key={fav.id}
                    className="flex gap-5 items-center space-y-3 border-t py-2"
                  >            <div className="avatar">
                  <div className="mask h-16 w-16">
                    <img
                     src={fav.image}
                      alt="Avatar Tailwind CSS Component" />
                  </div></div>
                    <div className="w-56 space-y-2">
                      <p className="font-medium">{fav.title}</p>
                      <div className="flex gap-4">
                        <p>${fav.currentBidPrice}</p>
                        <p>Bids: {fav.bidsCount} </p>
                      </div>
                    </div>

                    <button
                      className="text-red-500 font-black px-3 cursor-pointer py-1 bg-gray-200 text-lg rounded"
                      id="removeBtn"
                      onClick={() => handleRemoveBit(fav)}
                    >
                    X 
                    </button>
                  </div>
                ))
              )}
            </div>



            <div className="flex justify-around items-center font-semibold text-lg">
              <h1>Total bids Amount :</h1>
              <p>${bit}</p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={2000} />
    </section>
  );
};

export default Auctions;
