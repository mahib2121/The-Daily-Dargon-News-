import React from "react";
import { Link } from "react-router";

//import { FaEye, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
    const {
        id,
        title,
        rating,
        total_view,
        author,
        thumbnail_url,
        details,
        others,
    } = news;

    return (
        <div className="bg-white shadow-md rounded-2xl overflow-hidden border">
            {/* Author Section */}
            <div className="flex items-center gap-3 p-4 border-b">
                <img
                    src={author.img}
                    alt={author.name}
                    className="w-10 h-10 rounded-full"
                />
                <div>
                    <h3 className="font-semibold">{author.name}</h3>
                    <p className="text-gray-500 text-sm">
                        {new Date(author.published_date).toLocaleDateString()}
                    </p>
                </div>
            </div>

            {/* Title */}
            <h2 className="text-lg font-bold px-4 pt-3 leading-snug">
                {title}
            </h2>

            {/* Thumbnail */}
            <div className="p-4">
                <img
                    src={thumbnail_url}
                    alt={title}
                    className="rounded-lg w-full h-56 object-cover"
                />
            </div>

            {/* Details */}
            <p className="text-gray-600 text-sm px-4 pb-2">
                {details.slice(0, 200)}...
                <Link to={`/newsDetail/${id}`} className="text-blue-600 cursor-pointer"> Read More</Link>
            </p>

            {/* Footer */}
            <div className="flex justify-between items-center px-4 pb-3">
                <div className="flex items-center gap-2 text-yellow-500">
                    {/* <FaStar /> <span className="text-gray-800 font-medium">{rating.number}</span> */}
                </div>

                <div className="flex items-center gap-2 text-gray-500">
                    {/* <FaEye /> <span>{total_view}</span> */}
                    {/* <FaEye><span>{total_view}</span> </FaEye> */}
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
