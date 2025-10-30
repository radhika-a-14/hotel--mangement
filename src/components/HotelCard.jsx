import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../imp/images/assets"; // ✅ make sure this path is correct

const HotelCard = ({ room, index }) => {
  // 🔒 Prevent crash if props are missing
  if (!room) {
    console.warn("HotelCard: 'room' prop is missing");
    return <div className="text-red-500">No room data available</div>;
  }

  const imageSrc = room?.images?.[0] || "/placeholder.jpg"; // fallback
  const hotelName = room?.hotel?.name || "Unknown Hotel";
  const hotelAddress = room?.hotel?.address || "Unknown Address";
  const price = room?.pricePerNight || "N/A";

  return (
    <Link
      to={`/room/${room._id || ""}`}
      onClick={() => window.scrollTo(0, 0)}
      key={room._id || index}
      className="block"
    >
      <div className="relative max-w-sm w-full rounded-3xl overflow-hidden bg-white text-gray-500 shadow-[0px_4px_4px_rgbd(0,0,0,0.05)]">
        <img
          src={imageSrc}
          alt={hotelName}
          className="w-full h-48 object-cover"
        />
        {index % 2 === 0 && (
          <p className="px-3 py-1 absolute top-3 left-3 text-xs bg-white text-gray-800 font-medium rounded-b-full">
            Best Seller
          </p>
        )}
        <div className="p-4">
          <div className="flex items-center justify-between">
            <p className="font-playfair text-xl font-medium text-gray-800">
              {hotelName}
            </p>
            <div className="flex items-center gap-1">
              {assets?.starIconFilled ? (
                <img
                  src={assets.starIconFilled}
                  alt="star-icon"
                  className="w-4 h-4"
                />
              ) : (
                <span>⭐</span>
              )}
              <span>4.5</span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm mt-1">
            {assets?.locationIcon ? (
              <img
                src={assets.locationIcon}
                alt="location-icon"
                className="w-4 h-4"
              />
            ) : (
              <span>📍</span>
            )}
            <span>{hotelAddress}</span>
          </div>
          <div className="flex items-center justify-between mt-4">
            <p>
              <span>${price}</span>/night
            </p>
            <button className="px-4 py-2 text-sm font-medium border border-gray-300 rounded hover:bg-gray-50 transition-all cursor-pointer">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HotelCard;
